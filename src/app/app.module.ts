import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookEditComponent } from './component/book-edit/book-edit.component';
import { BookAddComponent } from './component/book-add/book-add.component';
import { BookDeleteComponent } from './component/book-delete/book-delete.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditComponent,
    BookAddComponent,
    BookDeleteComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
