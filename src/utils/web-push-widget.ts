import { initializeApp } from 'firebase/app';
import { FirebaseOptions } from '@firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import hash from 'hash.js';
import { UAParser } from 'ua-parser-js';
import { WepPushEventEmitter } from './web-push-event-emitter';
import { WebPushLogger } from './wep-push-logger';
import {
  EdnaRegisterData,
  WebPushLocalStorageFields,
} from '../types/web-push-widget';
import { Workbox } from 'workbox-window';

class WebPushWidget {
  eventEmitter = new WepPushEventEmitter();
  logger = new WebPushLogger();
  private fcmToken: string = '';
  public subscribe = this.eventEmitter.subscribe;

  private setDeviceAddress(deviceAddress: string): void {
    if (!localStorage.setItem) return;
    localStorage.setItem(
      WebPushLocalStorageFields.deviceAddress,
      deviceAddress
    );
    this.logger.log('new deviceAddress', deviceAddress);
  }

  public getDeviceAddress() {
    return (
      localStorage.getItem(WebPushLocalStorageFields.deviceAddress) ||
      `Field ${WebPushLocalStorageFields.deviceAddress} does not exist in local storage`
    );
  }

  private setDeviceUID(deviceUID: string): void {
    if (!localStorage.setItem) return;
    localStorage.setItem(WebPushLocalStorageFields.deviceUID, deviceUID);
    this.logger.log('new deviceUID', deviceUID);
  }

  public getDeviceUID() {
    const deviceUID = localStorage.getItem(WebPushLocalStorageFields.deviceUID);
    if (!deviceUID) {
      this.logger.error(
        `Field ${WebPushLocalStorageFields.deviceUID} does not exist in local storage`
      );
      return null;
    }
    return deviceUID;
  }

  private onError = (error: Error) => {
    this.eventEmitter.emit('onError', error);
  };

  public setEdnaRegistrationData = ({
    isWorkerManualRegistration,
    customWorkerScope,
    firebaseWorkerPath,
    providerUID,
    appPackage,
  }: EdnaRegisterData) => {
    this.logger.info('ednaRegistration start');
    this.logger.log(
      'current endaRegistrationData',
      this.getEdnaRegistrationData()
    );

    localStorage.setItem(WebPushLocalStorageFields.appPackage, appPackage);
    localStorage.setItem(WebPushLocalStorageFields.providerUID, providerUID);
    localStorage.setItem(
      WebPushLocalStorageFields.isWorkerManualRegistration,
      isWorkerManualRegistration
    );
    localStorage.setItem(
      WebPushLocalStorageFields.firebaseWorkerPath,
      firebaseWorkerPath
    );
    localStorage.setItem(
      WebPushLocalStorageFields.customWorkerScope,
      customWorkerScope
    );

    this.logger.info('ednaRegistration start');
    this.logger.log(' new ednaRegistrationData', {
      isWorkerManualRegistration,
      customWorkerScope,
      firebaseWorkerPath,
      providerUID,
      appPackage,
    });
  };

  getEdnaRegistrationData(): EdnaRegisterData {
    return {
      appPackage:
        localStorage.getItem(WebPushLocalStorageFields.appPackage) || '',
      providerUID:
        localStorage.getItem(WebPushLocalStorageFields.providerUID) || '',
      isWorkerManualRegistration:
        localStorage.getItem(
          WebPushLocalStorageFields.isWorkerManualRegistration
        ) || '',
      firebaseWorkerPath:
        localStorage.getItem(WebPushLocalStorageFields.firebaseWorkerPath) ||
        '',
      customWorkerScope:
        localStorage.getItem(WebPushLocalStorageFields.customWorkerScope) || '',
    };
  }

  public async registerServiceWorker(
    serviceWorkerPath: string,
    serviceWorkerScope: string
  ) {
    if (!('serviceWorker' in navigator)) {
      this.logger.error('Service worker is not supported');
      this.eventEmitter.emit(
        'onError',
        new Error('Service worker is not supported')
      );
      return;
    }

    try {
      const serviceWorker = new Workbox(serviceWorkerPath, {
        scope: serviceWorkerScope,
      });
      const channel = new BroadcastChannel('sw-messages');

      channel.addEventListener('message', event => {
        const { type, msg, url, ...rest } = event.data;
        switch (type) {
          case 'BASIC-ERROR':
            this.logger.error(
              `SERVICE-WORKER-ERROR: ${msg}`,
              new Error('Service worker error')
            );
            break;
          case 'BASIC-LOG':
            this.logger.log(`SERVICE-WORKER-LOG: ${msg}`, rest);
            break;
          case 'redirect-from-notificationclick':
            window.location.href = url;
            break;
          default:
        }
      });

      return await serviceWorker.register();
    } catch (error) {
      this.logger.error('Service worker is not registered');
      this.eventEmitter.emit('onError', error as Error);
    }
  }

  public async initializeFirebase(
    config: FirebaseOptions,
    serviceWorkerRegistration: ServiceWorkerRegistration
  ) {
    this.logger.log('Start Firebase initialization');

    const firebaseApp = initializeApp(config);
    const messaging = getMessaging(firebaseApp);

    this.logger.log('Finish initFirebaseApp', firebaseApp);

    try {
      const token = await getToken(messaging, {
        serviceWorkerRegistration: serviceWorkerRegistration,
        vapidKey:
          'BEmw-lZklHnkeHS-rrFu40Yj82cMxL-jnttYjBKm4ye68tUvZXDsVeYxyeab6ucvxBMtjfTtDYaKBLv-I9L_njU',
      });
      onMessage(messaging, e => {
        console.log('Received message', e);
      });
      this.logger.log('Current Push-tocken: ', token);
      if (!token) {
        this.logger.error("Can't get Push-token");
        return;
      }
      this.fcmToken = token;
      const deviceUID =
        this.getDeviceUID() || hash.sha256().update(token).digest('hex');
      this.logger.log('Current deviceUID: ', deviceUID);
      if (!deviceUID) {
        this.logger.error("Can't get device UID");
        return;
      }
      this.setDeviceUID(deviceUID);
      this.logger.log('Finish initFirebaseApp');
    } catch (error) {
      this.logger.error('Ошибка при получении токена:', error as Error);
    }
  }

  public async registerDeviceInEdna() {
    this.logger.info('Starting Edna registration');
    try {
      const { os, browser, device } = UAParser(navigator.userAgent);
      const response = await fetch(
        'https://pushservertest.edna.id/push-test/service/device/registerPushDevice',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pushDeviceInfo: {
              appPackage:
                localStorage.getItem(WebPushLocalStorageFields.appPackage) ||
                '',
              appVersion:
                localStorage.getItem(WebPushLocalStorageFields.appVersion) ||
                'fake appVersion',
              providerUid:
                localStorage.getItem(WebPushLocalStorageFields.providerUID) ||
                '',
              version: '1.4.0',
              pnsPushAddresses: [
                {
                  pns: 'fweb',
                  pnsPushAddress: this.fcmToken,
                },
              ],
              deviceUid:
                this.getDeviceUID() + '028cdbf63c0d55e83a19ac58ebf5c0c3f04',
              osName: `EWM_${os.name}`,
              osVersionMajor: os.version?.split('.')[0],
              osVersionMinor: os.version?.split('.')[1],
              osVersionPatch: os.version?.split('.')[2],
              timeZoneUTCOffsetSecond: new Date().getTimezoneOffset(),
              deviceName: device.type || 'desktop',
              locale: navigator.language,
              browser: browser.name,
              browserVersion: browser.version,
              deviceModel: `${device.vendor} ${device.model}`,
            },
          }),
        }
      );
      const {
        deviceAddress: { deviceAddress },
      } = await response.json();
      this.setDeviceAddress(deviceAddress);
    } catch (error) {
      this.logger.error('Ошибка при регистрации в Edna', error as Error);
    }
  }

  public async checkPermission() {
    if (!('Notification' in window)) {
      this.eventEmitter.emit(
        'onError',
        new Error('This browser does not support desktop notifications.')
      );
      this.logger.error('This browser does not support desktop notifications.');
      return;
    }
    try {
      return await Notification.requestPermission();
    } catch (error) {
      this.eventEmitter.emit('onError', error as Error);
      this.logger.error('Error while checking permission', error as Error);
    }
  }
}

export const WebPushWidgetEntity = new WebPushWidget();
