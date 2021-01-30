import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const MATERIAL = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatGridListModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [CommonModule,
    MATERIAL
  ]
})
export class MaterialModule { }
