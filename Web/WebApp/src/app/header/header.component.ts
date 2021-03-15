import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() mediaDimensionXs: boolean | any;
  constructor(private router: Router) { }

  navCheckList() {
    this.router.navigate(['/checklist/list'])
  }

  navTest() {
    this.router.navigate(['/form']);
  }
}
