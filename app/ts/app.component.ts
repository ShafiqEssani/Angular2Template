import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';
import {VideoPLayerComponent} from './videoplayer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.component.html',
    directives: [
      PlaylistComponent,
      VideoPLayerComponent
    ]
})

export class AppComponent {
  mainHeading = Config.MYVAR;
  videos: Array<Video>;
  video: Video;

  constructor() {
    this.videos = [
      new Video(1, "Angular 4", "htPYk6QxacQ", "Getting Started - The Basics"),
      new Video(2, "Angular 2", "-zW1zHqsdyc", "60mins Anuglar2"),
      new Video(3, "RxJS", "T9wOu11uU6U", "What and Why")
    ];
    this.video = this.videos[0];
  }

  onVideoSelected(video: Video) {
     this.video = video;
   }
}
