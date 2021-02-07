import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WebApp';
  sybMediaObs: Subscription;
  mediaDimensionXs: boolean;
  constructor(private mediaObserver: MediaObserver,
    private mediachanges: MediaChange) {
  }

  ngOnInit(): void {
    this.sybMediaObs = this.mediaObserver.media$.subscribe(
      (data: MediaChange) => {
        this.mediaDimensionXs = data.mqAlias === 'xs' ? true : false;
        console.log(data.mqAlias);
      })
  }
  ngOnDestroy(): void {
    this.sybMediaObs.unsubscribe();
  }
}
