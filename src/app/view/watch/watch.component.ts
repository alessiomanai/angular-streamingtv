import { Component, Input, OnInit } from '@angular/core';
import Hls from 'hls.js';
import { ActualChannelService } from 'src/app/services/actual-channel.service';


@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  providers: [ActualChannelService]
})
export class WatchComponent implements OnInit {

  videoSrc : string;

  constructor(private actualChannel: ActualChannelService) { }

  ngOnInit(): void {

    this.getActualChannel();

    let video : any = document.getElementById("video"); //makes more sense with "ViewChild" but I'm lazy

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(this.videoSrc);
      hls.attachMedia(video);
    }
    
  }

  getActualChannel() : void {
    
    this.videoSrc = this.actualChannel.getChannel();
  }

}
