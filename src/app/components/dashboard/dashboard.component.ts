import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/data.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  showButton: boolean = false;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productsService.showFirstPage();
    this.getProducts();
  }

  getProducts(): void {
    this.loading = true;
    this.productsService.getProducts()
      .subscribe(products => {
        this.loading = false;
        this.showButton = !!products.length;
        this.products.push(...products);
      });
  }

  viewProduct(product: Product): void {
    this.router.navigate(['detail', product.id]);
  }

  addToCart(product: Product): void {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}


