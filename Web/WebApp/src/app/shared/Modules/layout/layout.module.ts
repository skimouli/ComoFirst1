import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { Colordirective } from './directive/color.directive';
import { ReactiveFormsModule } from '@angular/forms';
 
const exp = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    Colordirective],
  imports: [
    ...exp
  ],
  exports: [...exp,
    Colordirective]
})
export class LayoutModule { }
