import { TestBed, waitForAsync } from "@angular/core/testing"
import { AppComponent } from './app.component'

describe('app', () => {
  beforeEach(waitForAsync(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
  }).compileComponents())
  );
  it('aaaaaaaaaaa', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: HTMLElement = fixture.nativeElement;
  })
})
