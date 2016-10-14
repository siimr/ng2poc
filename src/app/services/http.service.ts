import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable, ObservableInput } from 'rxjs/Observable';
import { AppConfig } from './../app.config';
import { ListItem } from './../models/list-item.model';
import { ListResponseItem } from './../models/list-response.model';
import { DetailItem } from './../models/detail-item.model';


@Injectable()
export class HttpService {
    ApplicationConfig: AppConfig
    constructor(private http: Http, public appConfig: AppConfig) {
    }

    // <Do not remove>
    // Variables that are needed for transpile time, used in get/extract code
    private assetType: any;
    assetsArray: any[];
    // </Do not remove>

    getList<T>(arg: T, url: string): Observable<T[]>{
        let itemObject: Object = {
            assetType: arg,
            assetsArray: new Array<T>()
        }
        return this.http.get(url)
            .map(this.extractListData, itemObject)
            .catch(this.handleError);
    }

    private extractListData(res: Response) {
        // "re-naming" this scope variable to avoid confusion
        let itemObject = this; // 'this' scope is the object passed into map
        let responseJson: any[] = res.json();   
        responseJson.forEach(item => {
            itemObject.assetsArray.push(new itemObject.assetType(item));
        })
        return itemObject.assetsArray;
    }

    private handleError(error: any){
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }



    getDetail(id: string): Observable<DetailItem> {
        return this.http.get(`${this.appConfig.ConfigUrl}/api/storage/publish/movies/${id}/metadata.json`)
            .map(this.extractDetailsData)
            .catch(this.handleError);
    }

    private extractDetailsData(res: Response) {
        let responseJson = res.json();
        console.log(responseJson);
        return new DetailItem(
            responseJson.id,
            responseJson.title,
            responseJson.description,
            responseJson.cast,
            responseJson.directors,
            responseJson.genres,
            responseJson.year,
            responseJson.country
        )

    }
}