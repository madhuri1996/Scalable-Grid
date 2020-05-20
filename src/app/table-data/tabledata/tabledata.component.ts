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

  constructor( private service: DataService) { }

  ngOnInit(): void {

    this.service.getBooks().then(books => this.books = books);
    this.cols = [
      { field: 'name', header: 'Name' },
      {field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }
    ]
  }

}
