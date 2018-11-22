import { InjectionToken } from '@angular/core'

export const storage = localStorage;

const handler = {
    get: function(obj: Storage, prop) {
        return JSON.parse(obj.getItem(prop));
    },
    set: function(obj: Storage, prop, value) {
        obj.setItem(prop, JSON.stringify(value));
        return this;
    }
}
export const createStorageProxy = (storage) => new Proxy(storage, handler) as LocalStorageProxyInterface;


export const STORAGE =
    new InjectionToken<LocalStorageProxyInterface>('local-storage');

export interface LocalStorageProxyInterface {
    isMature: boolean;
}
