import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './../services/http.service';
import { ListItem } from './../models/list-item.model';
import { AppConfig } from './../app.config';

@Component({
    selector: 'video-list',
    templateUrl: './video-list.component.html',
    styles: [require('./video-list.component.less')]
})

export class VideoListComponent implements OnInit {
    items: any;
    constructor(private httpService: HttpService, private router: Router,private appConfig: AppConfig) {
    }

    ngOnInit(){
        this.getItems();
    }

    getItems() {
        this.httpService.getList(ListItem, `${this.appConfig.ConfigUrl}/api/storage/publish/movies/_catalog.json`).subscribe(
            items => this.items = items,
            error => {
                console.log(`Video list failed to load: ${error}`)
            }
        );
    }

    onSelect(item: ListItem) {
        this.router.navigate(['videoDetail', item.id]);
    }
}