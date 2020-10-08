import { Component } from '@angular/core';
import { IProduct } from './model/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listProduct:IProduct[]=[
    {
      id: 'LTAU407',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_55277_fx505.jpg',
      lastPrice: 192990000,
      discount: 5,
      price: 18290000,
      quantity: 10
    },
    {
      id: 'LTAU50',
      name: 'Laptop Asus Gaming FX505DT-HN478T Ryzen7 3750H/8Gb/SSD 512/15.6 144hz/GTX 1650 4Gb/Win10/Xám',
      img: 'https://hanoicomputercdn.com/media/product/250_55277_fx505.jpg',
      lastPrice: 192990000,
      discount: 5,
      price: 18290000,
      quantity: 10
    }
  ]
}
