import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(next => {
      this.books = next;
    }, error => {
      console.log(error)
    });
  }

}
