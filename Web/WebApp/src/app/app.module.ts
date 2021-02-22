import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CreatChecklistComponent } from './checklist/creat-checklist/creat-checklist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './shared/Modules/layout/layout.module';
import { CoreModule } from './shared/Modules/core/core.module';
import { CreatTacheComponent } from './checklist/creat-tache/creat-tache.component';
import { UpperCasePipe } from './pipe/uppercase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChecklistComponent,
    HeaderComponent,
    CreatChecklistComponent,
    CreatTacheComponent,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    CoreModule
  ],
  providers: [MediaChange,
    MediaObserver],
  entryComponents: [CreatChecklistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
