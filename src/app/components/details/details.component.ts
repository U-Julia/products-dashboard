import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/data.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        first(),
      )
      .subscribe((params: ParamMap) => {
        let id: number = Number(params.get('id'));
        this.getProduct(id);
      });
  }

  addToCart(product: Product): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  private getProduct(id: number): void {
    this.productsService.getProductById(id)
      .subscribe((product) => this.product = product);
  }
}
