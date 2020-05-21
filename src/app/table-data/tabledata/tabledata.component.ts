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

  togglecase = 'table-cell';

  selectedbook: Book;

  constructor( private service: DataService) { }

  ngOnInit(): void {

    this.service.getBooks().then(books => this.books = books);
    this.cols = [
      { field: 'name', header: 'Name', display: 'table-cell' },
      {field: 'pages', header: 'Pages', display: this.togglecase },
      { field: 'status', header: 'Status', display: 'table-cell' },
      { field: 'isbn', header: 'ISBN', display: 'table-cell'}
    ]
  }

  showOrHideColumn() {
    if(this.togglecase === 'table-cell') {
      this.togglecase = 'none';
    }
    else {
      this.togglecase = 'table-cell';
    }
    this.cols = [
      { field: 'name', header: 'Name', display: 'table-cell' },
      {field: 'pages', header: 'Pages', display: this.togglecase },
      { field: 'status', header: 'Status', display: 'table-cell' },
      { field: 'isbn', header: 'ISBN', display: 'table-cell'}
    ]
  }

  onRowSelect(event) {
    console.log("Selected Book Data",event.data);
  }

}
