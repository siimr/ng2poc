import { ReflectiveInjector } from '@angular/core';
import { AppConfig } from './../app.config';


export class DetailItem {
    public teaserUrl: string;
    appConfig: AppConfig;
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public cast: string,
        public directors: string,
        public genres: string,
        public year: number,
        public country: string
    ) {
        let injector: any = ReflectiveInjector.resolveAndCreate([AppConfig])
        this.appConfig = injector.get(AppConfig);
        this.teaserUrl = this.appConfig.ConfigUrl + '/api/storage/publish/movies/' + id + '/cover/large_video_detail.png' 
    }
}