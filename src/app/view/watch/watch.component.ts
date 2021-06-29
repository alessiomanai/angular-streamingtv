import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Hls from 'hls.js';
import { ChannelService } from 'src/app/services/channel.service';


@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  providers: [ChannelService]
})
export class WatchComponent implements OnInit {

  private videoSrc : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.videoSrc = data['ch'];
    });
    
    let video : any = document.getElementById("video"); //makes more sense with "ViewChild" but I'm lazy

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(this.videoSrc);
      hls.attachMedia(video);
    }
    
  }

}
