import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittexttacheComponent } from './edittexttache.component';

describe('EdittexttacheComponent', () => {
  let component: EdittexttacheComponent;
  let fixture: ComponentFixture<EdittexttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittexttacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittexttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
