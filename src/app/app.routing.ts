import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'videoList'},
    { path: 'videoList', component: VideoListComponent, pathMatch: 'prefix' },
    { path: 'videoDetail/:id', component: VideoDetailComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [VideoListComponent, VideoDetailComponent];