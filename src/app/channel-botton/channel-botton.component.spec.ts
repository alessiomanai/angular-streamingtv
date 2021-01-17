import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBottonComponent } from './channel-botton.component';

describe('ChannelBottonComponent', () => {
  let component: ChannelBottonComponent;
  let fixture: ComponentFixture<ChannelBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
