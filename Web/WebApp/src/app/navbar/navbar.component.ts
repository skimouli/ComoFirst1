import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavBarXs: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navCheckList() {
    this.router.navigate(['/checklist']);
    this.showNavBarXs = false;
  }

  navhome() {
    this.router.navigate(['/**']);
    this.showNavBarXs = false;
  }
}
