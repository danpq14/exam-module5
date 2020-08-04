import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../interface/book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get("id");
    this.bookService.getBookById(id).subscribe(next => {
      this.book = next
    }, error => console.log(error));
  }

}
