import {InjectionToken} from '@angular/core';

export class AppConfigModel {
    apiEndpoint: string;
    title: string;

    constructor(init?: Partial<AppConfigModel>) {
        Object.assign(this, init);
    }
}

export const APP_CONFIG = new InjectionToken('app-config')

export const HERO_DI_CONFIG: AppConfigModel = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
}
