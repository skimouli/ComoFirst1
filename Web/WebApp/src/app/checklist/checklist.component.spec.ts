import { fakeAsync, TestBed, tick, waitForAsync } from "@angular/core/testing";
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ResourceService } from '../shared/Modules/core/services/resource.service';
import { LayoutModule } from '../shared/Modules/layout/layout.module';
import { ChecklistComponent } from './checklist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogStub } from './MatDialogStub';
import { CreatChecklistComponent } from './creat-checklist/creat-checklist.component';
describe('checklist.component spec', () => {
  let resourceServiceSpy;
  const dialogStub = new MatDialogStub();
  beforeEach(waitForAsync(() => {
    resourceServiceSpy = jasmine.createSpyObj('ResourceService', ['fetch']);
    resourceServiceSpy.fetch.and.returnValue(of([{
      id: 1, nomCheckList: 'reception', taches: [{
        id: 1,
        text: 'faire la caisse ',
        active: false,
        LoginUtilisateur: 'mohamed'
      }]
    }]));
    TestBed.configureTestingModule({
      imports: [LayoutModule, BrowserAnimationsModule],
      declarations: [ChecklistComponent, CreatChecklistComponent],
      providers: [{ provide: ResourceService, useValue: resourceServiceSpy },
        { provide: MatDialog, useValue: dialogStub  }]
    }).compileComponents().then(() => {
      TestBed.inject(ResourceService);
    })
  }));
  it('test call fetch', () => {

    const fixture = TestBed.createComponent(ChecklistComponent);
    fixture.detectChanges();
    expect(resourceServiceSpy.fetch).toHaveBeenCalled();
  })


  it('should', fakeAsync(() => {
    const fixture = TestBed.createComponent(ChecklistComponent);
    const component = fixture.componentInstance;
    let button = fixture.debugElement.nativeElement.querySelector('Button');
    button.click();
    expect(component.openCreatCheckList()).toHaveBeenCalled();

  }));
})
