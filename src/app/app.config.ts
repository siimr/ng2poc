import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    constructor() {}

    public ConfigUrl: string = "http://media.cms.showcase.axtest.net";
}