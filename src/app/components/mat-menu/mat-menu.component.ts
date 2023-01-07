import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.css']
})
export class MatMenuComponent implements OnInit {
    private _cart : Cart = {items: []}
    itemsQuantity=0
    @Input()
    get cart() : Cart { return this._cart; }
    set cart(cart : Cart)  {
      this._cart = cart;
      this.itemsQuantity = this._cart.items.map(item => item.quantity).reduce((sum, item) => sum + item,0);
    }

  constructor(private cartService: CartService) { }
     getTotal(items: Array<CartItem>): number{
      return this.cartService.getTotal(items);
     } 

  ngOnInit(): void {
  }

}
