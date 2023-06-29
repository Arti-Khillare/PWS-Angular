import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id : 1, name : "Ultra HD Watch fasttrack", price : '1023', color : 'gray', available : 'NotAvailable', image : '/assets/shop.png'},
    {id : 2, name : "Smart Watch fasttrack", price : '3423', color : 'black', available : 'Available', image : '/assets/shop.png'},
    {id : 3, name : "Smart TV mi", price : '2023', color : 'Silver', available : 'NotAvailable', image : '/assets/shop.png'},
    {id : 4, name : "Dell Inspiron one 27 Ryzen 7", price : '31023', color : 'gray+black', available : 'Available', image : '/assets/shop.png'},
    {id : 5, name : "Lg Refrigerator with Door Cooling", price : '22993', color : 'gray+silver', available : 'Available', image : '/assets/shop.png'}
  ];
}
