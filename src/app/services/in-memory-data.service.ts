import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 1,
        title: 'Pullover',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$299',
        discountCost: '$249',
        isNew: false,
        img: 'assets/imgs/pullover1.jpg'
      },
      {
        id: 2,
        title: 'Hoodie',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$150',
        discountCost: '',
        isNew: true,
        img: 'assets/imgs/hoodie.jpg'
      },
      {
        id: 3,
        title: 'Coat',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$350',
        discountCost: '$300',
        isNew: false,
        img: 'assets/imgs/coat3.jpg'
      },
      {
        id: 4,
        title: 'Jeans',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$100',
        discountCost: '',
        isNew: false,
        img: 'assets/imgs/jeans1.jpg'
      },
      {
        id: 5,
        title: 'Dress',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$85',
        discountCost: '',
        isNew: false,
        img: 'assets/imgs/dress1.jpg'
      },
      {
        id: 6,
        title: 'Coat',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$300',
        discountCost: '$270',
        isNew: false,
        img: 'assets/imgs/coat4.jpg'
      },
      {
        id: 7,
        title: 'Blouse',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$75',
        discountCost: '',
        isNew: true,
        img: 'assets/imgs/blouse2.jpg'
      },
      {
        id: 8,
        title: 'Bag',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$250',
        discountCost: '$220',
        isNew: false,
        img: 'assets/imgs/bag 2.jpg'
      },
      {
        id: 9,
        title: 'Shoes',
        description: 'Adipiscifng elit. Praesent vestibulum molestie lacus',
        cost: '$400',
        discountCost: '',
        isNew: false,
        img: 'assets/imgs/shoes.jpg'
      },

    ];
    return {products};
  }

  constructor() {
  }
}
