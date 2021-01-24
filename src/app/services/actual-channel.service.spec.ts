import { TestBed } from '@angular/core/testing';

import { ActualChannelService } from './actual-channel.service';

describe('ActualChannelService', () => {
  let service: ActualChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
