import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() fullWidthMode = false;
@Input() product: Product | undefined;
@Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 onAddToCart() : void {
  this.addToCart.emit(this.product);
 }
}
