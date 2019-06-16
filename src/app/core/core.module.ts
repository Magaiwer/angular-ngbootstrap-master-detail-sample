import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from '../core/nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
   // HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
  ],
  exports: [
    //shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //Shared components
    NavBarComponent
  ]
})
export class CoreModule { }
