import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ConcatPipe } from './pipe/concat.pipe';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


const routes: Route[] = [
  { path: 'form', component: Test1Component }]
@NgModule({
  declarations: [Test1Component, Test2Component, ConcatPipe],
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class FormModule {

}
