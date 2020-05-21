import { Component, OnInit } from '@angular/core';
import { DataService, Book } from 'src/app/service/data.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  books: Book[];

  cols: any[];

  selectedbook: Book;

  constructor( private service: DataService) { }

  ngOnInit(): void {

    this.service.getBooks().then(books => this.books = books);
    this.cols = [
      { field: 'name', header: 'Name', display: 'table-cell' },
      { field: 'description', header: 'Description', display: 'none' },
      {field: 'pages', header: 'Pages', display: 'table-cell' },
      { field: 'status', header: 'Status', display: 'table-cell' },
      { field: 'isbn', header: 'ISBN', display: 'table-cell'}
    ]
  }

  onRowSelect(event) {
    console.log("Selected Book Data",event.data);
  }

}
