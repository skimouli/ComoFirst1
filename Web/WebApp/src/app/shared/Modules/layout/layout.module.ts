import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';

const exp = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule
]

@NgModule({
  declarations: [],
  imports: [
   ...exp
  ],
  exports:[...exp]
})
export class LayoutModule { }
