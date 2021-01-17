import { Component, OnInit } from '@angular/core';
import * as Hls from 'hls.js';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let video : any = document.getElementById("video");

    let videoSrc = 'http://livestreaming.videolina.it/live/Videolina/chunklist_w1548194757.m3u8';

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    }
    
  }

}
