import { Component, Input, OnInit } from '@angular/core';
import Hls from 'hls.js';


@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  @Input() videoSrc : string = 'http://livestreaming.videolina.it/live/Videolina/chunklist_w1548194757.m3u8';

  constructor() { }

  ngOnInit(): void {

    let video : any = document.getElementById("video");

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(this.videoSrc);
      hls.attachMedia(video);
    }
    
  }

}
