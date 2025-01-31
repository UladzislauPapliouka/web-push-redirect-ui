import {
  EventMap,
  WebPushCallbacksParameters,
  WebPushEventCallbacks,
  WebPushEventListenersNames,
} from '../types/web-push-emmiter';

export class WepPushEventEmitter {
  events: Partial<EventMap>;

  constructor() {
    this.events = {};
  }

  public subscribe<U extends WebPushEventListenersNames>(
    eventName: U,
    callback: WebPushEventCallbacks[U]
  ): void {
    this.events[eventName]?.push(callback);
  }

  public unsubscribe<U extends WebPushEventListenersNames>(
    eventName: U,
    callback: WebPushEventCallbacks[U]
  ): void {
    const callbacks: WebPushEventCallbacks[U][] | undefined =
      this.events[eventName];

    if (callbacks) {
      this.events[eventName] = callbacks.filter(
        cb => cb !== callback
      ) as EventMap[U];
    }
  }

  public emit<U extends WebPushEventListenersNames>(
    eventName: U,
    ...args: WebPushCallbacksParameters[U]
  ): void {
    const callbacks = this.events[eventName];
    if (!callbacks) return;

    callbacks.forEach(callback => {
      callback(args as never);
    });
  }
}
