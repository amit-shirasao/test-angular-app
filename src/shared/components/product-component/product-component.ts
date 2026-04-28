import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  product = input<string>();
  addToCartEvent = output<string>();

  addToCart() {
    this.addToCartEvent.emit(this.product() || '');
  }
}
