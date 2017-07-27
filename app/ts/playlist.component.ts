import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Video} from './video';

@Component({
  selector: 'playlist',
  templateUrl: 'app/templates/playlist.component.html',
  //inputs: ['videos']
})

export class PlaylistComponent {
  @Input() videos: Array<Video>;
  @Output() onSelectVid = new EventEmitter<Video>();
  currentVideo: Video;

  ngOnInit(){
    this.currentVideo = this.videos[0];
  }

  onSelect(vid: Video){
    this.onSelectVid.emit(vid);
    this.currentVideo = vid;
  }
}
