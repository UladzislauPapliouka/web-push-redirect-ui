export enum WebPushEvents {
  DeviceAddressChanged = 'DeviceAddressChanged',
  Error = 'Error',
}

export type WebPushEventListenersNames = `on${WebPushEvents}`;

export type WebPushEventCallbacks = {
  [U in WebPushEventListenersNames]: U extends 'onError'
    ? (error: Error) => void
    : U extends 'onDeviceAddressChanged'
      ? (deviceAddress: string) => void
      : never;
};
export type WebPushCallbacksParameters = {
  [U in keyof WebPushEventCallbacks]: Parameters<WebPushEventCallbacks[U]>;
};

export type EventMap = {
  [U in WebPushEventListenersNames]: WebPushEventCallbacks[U][];
};
