import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../shared/components/product-component/product-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  cart: string[] = [];

  addToCart(product: string = '') {
    this.cart.push(product);
    console.log('Product received in parent is ' + product);
  }
}
