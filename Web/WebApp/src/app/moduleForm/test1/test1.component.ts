import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommunicationService } from '../../shared/Modules/core/services/communication.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  constructor(private cs: CommunicationService) { }
  dddd = 'sssssssssssss';
  value: string = 'first';
  value2='eee';
  
  @ViewChild('input') el: ElementRef;

  click() {
    this.cs.transmetreMessage.next(this.el.nativeElement.value);
    this.value = this.el.nativeElement.value;
  }

  AfterEvant(value: string) {
    this.value2 = value;
  }

}
