import { Component, Input, OnInit } from '@angular/core';
import { Channel } from 'src/app/model/channel.interface';

@Component({
  selector: 'channel-botton',
  templateUrl: './channel-botton.component.html',
  styleUrls: ['./channel-botton.component.css']
})
export class ChannelBottonComponent implements OnInit {

  @Input()
  channel: Channel;

  constructor() { }

  ngOnInit(): void {
  }

}
