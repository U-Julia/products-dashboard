import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/data.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  clearCart(): void {
    this.products = [];
    window.alert('Your cart has been cleared!');
    this.cartService.clearCart();
  }
}
