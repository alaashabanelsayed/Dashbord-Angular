import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})






export class PostsComponent implements OnInit{
  // dataSource=[];
 
  // displayedColumns: any[] | undefined;
  
  // clickedRows: any[] | undefined;
  
  displayedColumns: string[] = ['position', 'name', 'price', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor(){}

ngOnInit(): void {
  
}
}







export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  symbol: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Product 1', price: 50, symbol: 'H' },
  {position: 2, name: 'Product 2', price: 200, symbol: 'He'},
  {position: 3, name: 'Product 3', price: 100, symbol: 'Li'},
  {position: 4, name: 'Product 4', price: 90, symbol: 'Be'},
  {position: 5, name: 'Product 5', price: 500, symbol: 'B'},
  
];
