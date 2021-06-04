import { Component, OnInit } from '@angular/core';
import { ActualChannelService } from '../services/actual-channel.service';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  providers: [ActualChannelService]
})
export class ChannelsComponent implements OnInit {

  channels : Array<any> ;

  constructor(private actualChannel: ActualChannelService) { }

  ngOnInit(): void {
    this.channels = this.actualChannel.getChannelsList();
  }

  selectChannel(i: number){

    this.actualChannel.selectChannel(i);

  }

}
