import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-summary',
  templateUrl: './book-summary.component.html',
  styleUrls: ['./book-summary.component.css']
})
export class BookSummaryComponent {

  @Input() book; // TODO: Define type

}
