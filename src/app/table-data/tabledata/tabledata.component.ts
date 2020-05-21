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
      {field: 'author', header: 'Author', display: 'table-cell' },
      { field: 'price', header: 'Price', display: 'none'}
    ]
  }

  onRowSelect(event) {
    console.log("Selected Book Data",event.data);
  }

}
