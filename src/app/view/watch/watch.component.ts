import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Hls from 'hls.js';
import { ActualChannelService } from 'src/app/services/actual-channel.service';


@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  providers: [ActualChannelService]
})
export class WatchComponent implements OnInit {

  private videoSrc : string;
  private id : number;

  constructor(private actualChannel: ActualChannelService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.id = data['ch'];
    });
    
    this.getActualChannel();

    let video : any = document.getElementById("video"); //makes more sense with "ViewChild" but I'm lazy

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(this.videoSrc);
      hls.attachMedia(video);
    }
    
  }

  getActualChannel() : void {
    
    this.videoSrc = this.actualChannel.getChannel(this.id);
  }

}
