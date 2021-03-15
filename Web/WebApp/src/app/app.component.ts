import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { CommunicationService } from './shared/Modules/core/services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WebApp';
  sybMediaObs: Subscription;
  mediaDimensionXs: boolean;
  entretien: Observable<string> = this.cs.transmetreMessage;
  constructor(private mediaObserver: MediaObserver,
    private cs: CommunicationService) {
  }
  ngOnInit(): void {
    //this.entretien = this.cs.transmetreMessage;
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
