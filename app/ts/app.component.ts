import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [
      PlaylistComponent
    ]
})

export class AppComponent {
  mainHeading = Config.MYVAR;
  videos: Array<Video>;

  constructor() {
    this.videos = [
      new Video(1, "Angular 4", "htPYk6QxacQ", "Getting Started - The Basics"),
      new Video(2, "Angular 2", "-zW1zHqsdyc", "60mins Anuglar2")
    ]
  }
}
