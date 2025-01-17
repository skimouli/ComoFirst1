import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist.component';
const routes: Routes = [
  {
    path: 'checklist/list',
    component: ChecklistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckListRoutingModule {
}
