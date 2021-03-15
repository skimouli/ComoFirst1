import { NgModule } from '@angular/core';
import { ChecklistComponent } from './checklist.component';
import { CreatTacheComponent } from './creat-tache/creat-tache.component';
import { CreatChecklistComponent } from './creat-checklist/creat-checklist.component';
import { LayoutModule } from '../shared/Modules/layout/layout.module';
import { CoreModule } from '@angular/flex-layout';
import { EdittexttacheComponent } from './edittexttache/edittexttache.component';
import { CheckListRoutingModule } from './checklist.reouting.modul';
@NgModule({
  declarations: [
    ChecklistComponent,
    CreatTacheComponent,
    CreatChecklistComponent,
    EdittexttacheComponent
  ],
  imports: [
    LayoutModule,
    CoreModule,
    CheckListRoutingModule
  ]
})
export class CheckListModule { }
