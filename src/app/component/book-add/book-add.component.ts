import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm : FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(""),
    author : new FormControl(""),
    description: new FormControl("")
  });
  constructor(private bookService: BookService,
              private router: Router) { }
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
  }
  addBook(){
    let book : Book = {
      id: null,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description
    };
    this.bookService.addBook(book).subscribe(next => {
      console.log(next);
    });
    this.router.navigateByUrl("");
  }
}
