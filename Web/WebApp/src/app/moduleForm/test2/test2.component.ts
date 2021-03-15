import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunicationService } from '../../shared/Modules/core/services/communication.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor(private cs: CommunicationService) { }

  ngOnInit(): void {
  }

  calss1: boolean = true;
  messageTest1: BehaviorSubject<string> = this.cs.transmetreMessage;
  @Input() valueInput: string;
  @Output() emiter: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputChild') el: ElementRef;
  OnClick() {
    this.emiter.emit(this.el.nativeElement.value);
  }
}
