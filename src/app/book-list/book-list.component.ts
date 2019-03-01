import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [
    { name: 'Dan Brown' },
    { name: 'David Frawley' },
    { name: 'Noam Chomsky' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
