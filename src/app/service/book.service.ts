import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../interface/book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:3000/books");
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>("http://localhost:3000/books/"+ id);
  }
  addBook(book: Book): Observable<Book> {
    return  this.http.post<Book>("http://localhost:3000/books", book)
  }
  editBook(book: Book): Observable<Book> {
    return this.http.put<Book>("http://localhost:3000/books/"+book.id, book);
  }
  deleteBook(book: Book): Observable<Book> {
    return this.http.delete<Book>("http://localhost:3000/books/"+ book.id);
  }

 }
