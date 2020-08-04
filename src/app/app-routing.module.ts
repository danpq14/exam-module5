import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './component/book-list/book-list.component';
import {BookDetailComponent} from './component/book-detail/book-detail.component';
import {BookEditComponent} from './component/book-edit/book-edit.component';
import {BookAddComponent} from './component/book-add/book-add.component';
import {BookDeleteComponent} from './component/book-delete/book-delete.component';

const routes: Routes = [
  {path: "", component: BookListComponent},
  {path: "book/:id/detail", component: BookDetailComponent},
  {path: "book/:id/edit", component: BookEditComponent},
  {path: "book/add", component: BookAddComponent},
  {path: "book/:id/delete", component: BookDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
