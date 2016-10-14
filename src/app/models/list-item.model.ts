import { ReflectiveInjector } from '@angular/core';
import { AppConfig } from './../app.config';
import { ListResponseItem } from './list-response.model';


export class ListItem {
    public teaserUrl: string;
    public title: string;
    public id: string;
    appConfig: AppConfig;
    constructor(
        private item: ListResponseItem
    ) {
        this.title = item.title;
        this.id = item.asset;
        let injector: any = ReflectiveInjector.resolveAndCreate([AppConfig])
        this.appConfig = injector.get(AppConfig);
        this.teaserUrl = this.appConfig.ConfigUrl + '/api/storage/publish/movies/' + this.id + '/cover/small_video_list.png' 
    }
}