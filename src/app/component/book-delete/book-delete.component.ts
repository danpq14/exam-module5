import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.paramMap.get("id");
    this.bookService.getBookById(id).subscribe(next => {
      this.book = next;
    }, error => console.log(error));
  }

  delete(){
      if (confirm("Bạn có chắc chắn muốn xóa ?")){
          this.bookService.deleteBook(this.book).subscribe(next => console.log(next));
          this.router.navigateByUrl("");
      }
      else {
        this.router.navigateByUrl("");
      }
  }
}
