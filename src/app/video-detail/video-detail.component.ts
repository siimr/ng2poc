import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './../services/http.service';
import { DetailItem } from './../models/detail-item.model';

@Component({
    selector: 'video-detail',
    templateUrl: './video-detail.component.html',
    styles: [require('./video-detail.component.less')]
})

export class VideoDetailComponent implements OnInit {
    asset: DetailItem;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private httpService: HttpService
    ) {}

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.httpService.getDetail(id).subscribe(
                item => this.asset = item
            )
        });
    }
}