import { WebPushWidgetEntity } from './web-push-widget';

export const registerWebPush = async () => {
  if (Notification.permission !== 'granted') {
    await WebPushWidgetEntity.checkPermission();
  }

  const swReg = await WebPushWidgetEntity.registerServiceWorker(
    '/web-push-redirect-ui/sw.js',
    '/web-push-redirect-ui/'
  );
  if (!swReg) return;

  WebPushWidgetEntity.setEdnaRegistrationData({
    isWorkerManualRegistration: 'true',
    customWorkerScope: 'web-push-redirect-ui/',
    appPackage: 'web-test.alfabank.ru',
    providerUID: 'PH5HQGI1OEZDZk44L24mUi5AOkVZX0NHJ1hNfj4=',
    firebaseWorkerPath: 'web-push-redirect-ui/sw.js',
  });
  await WebPushWidgetEntity.initializeFirebase(
    {
      apiKey: 'AIzaSyCRc7DZ4zEr_zFnse6FQcX2ucbBatA4nNI',
      authDomain: 'api-project-425647879232.firebaseapp.com',
      projectId: 'api-project-425647879232',
      storageBucket: 'api-project-425647879232.appspot.com',
      messagingSenderId: '425647879232',
      appId: '1:425647879232:web:7dcd3c280b6bc01b2b9ba5',
    },
    swReg
  );
  await WebPushWidgetEntity.registerDeviceInEdna();
  location.href = 'kittycash://'
};

export const askToEnableNotification = async () => {
  await registerWebPush();
};
