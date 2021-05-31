import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'channel-botton',
  templateUrl: './channel-botton.component.html',
  styleUrls: ['./channel-botton.component.css']
})
export class ChannelBottonComponent implements OnInit {

  @Input()
  channel: any;

  constructor() { }

  ngOnInit(): void {
  }

}
