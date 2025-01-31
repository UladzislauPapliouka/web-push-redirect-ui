export const enum WebPushLocalStorageFields {
  deviceAddress = 'deviceAddress',
  deviceUID = 'deviceUid',
  appPackage = 'appPackage',
  appVersion = 'appVersion',
  providerUID = 'providerUid',
  isWorkerManualRegistration = 'isWorkerManualRegistration',
  firebaseWorkerPath = 'firebaseWorkerPath',
  customWorkerScope = 'customWorkerScope',
}

export interface EdnaRegisterData {
  appPackage: string;
  providerUID: string;
  isWorkerManualRegistration: string;
  firebaseWorkerPath: string;
  customWorkerScope: string;
}

export interface FirebaseRegisterData {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  vapidKey: string;
}
