import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { EntriesFormComponent } from './pages/entries/entries-form/entries-form.component';
import { EntriesListComponent } from './pages/entries/entries-list/entries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesFormComponent,
    CategoriesListComponent,
    EntriesFormComponent,
    EntriesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
