import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webstore';
  cart:Cart = {items: []}
  constructor(private cartService: CartService){}
  ngOnInit(){
    this.cartService.cart.subscribe(cart => this.cart = cart)
  }
}
