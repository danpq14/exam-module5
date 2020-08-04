import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookId: number;
  bookForm : FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(""),
    author : new FormControl(""),
    description: new FormControl("")
  });
  constructor(private bookService: BookService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }
  get title(){
    return this.bookForm.get('title');
  }
  get author(){
    return this.bookForm.get('author');
  }
  get description(){
    return this.bookForm.get('description');
  }
  ngOnInit(): void {
    this.bookId = +this.activeRoute.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.bookId).subscribe(next => {
      this.bookForm.patchValue(next);
    });
  }
  editBook(){
    let editBook : Book = {
      id: this.bookId,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description
    };
    console.log(editBook);
    this.bookService.editBook(editBook).subscribe(next => console.log(next));
    this.router.navigateByUrl("");
  }
}
