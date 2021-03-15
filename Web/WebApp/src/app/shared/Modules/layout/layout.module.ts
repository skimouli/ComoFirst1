import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { Colordirective } from './directive/color.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { borderdirective } from './directive/bordercolor.directive';
import { ConcatPipe } from './pipe/concat.pipe';
 
const exp = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    Colordirective,
    borderdirective,
    ConcatPipe],
  imports: [
    ...exp,
    
  ],
  exports: [...exp,
    Colordirective,
    borderdirective,
    ConcatPipe]
})
export class LayoutModule { }
