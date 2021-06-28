import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  providers: [ChannelService]
})
export class ChannelsComponent implements OnInit {

  channels: Array<any>;

  constructor(private actualChannel: ChannelService) { }

  ngOnInit(): void {
    this.channels = this.actualChannel.getChannelsList();
  }

  selectChannel(url: string) {

    this.actualChannel.selectChannel(url);

  }

  public getFilteredList(list: any) {
    this.channels = list;
  }

}
