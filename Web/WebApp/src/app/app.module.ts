import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './shared/Modules/layout/layout.module';
import { CoreModule } from './shared/Modules/core/core.module';
import { CheckListRoutingModule } from './check-list/checklist.reouting.modul';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    CoreModule,
    CheckListRoutingModule
  ],
  providers: [MediaChange,
    MediaObserver],
  bootstrap: [AppComponent]
})
export class AppModule { }
