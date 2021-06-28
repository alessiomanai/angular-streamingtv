import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Channel } from 'src/app/model/channel.interface';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private filteredList: Array<Channel>;
  @Output() onSearch : EventEmitter<any> = new EventEmitter<any>();

  constructor(private actualChannel: ChannelService) { }

  ngOnInit(): void {
  }

  filterChannel(pattern: string){
    this.filteredList = this.actualChannel.getChannelsList().filter(c => c.name.match(pattern));
    this.onSearch.emit(this.filteredList);
  }

}
