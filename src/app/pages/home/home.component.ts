import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

const Row_Height: {[id:number] : number} = {1:400,3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  cols = 4;
  rowHeight = Row_Height[this.cols]
  category: string | undefined;
  products: Array<Product> | undefined;
  count = '20';
  sort = 'desc';
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private dataService: DataService
  ) {}


  ngOnInit(): void {
    this.getProducts();
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 992){
        this.cols = 1;
      }else{
        this.cols = 4;
      }
    })
  }
  getProducts(): void {
    this.productsSubscription = this.dataService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  onColumsStyleProductsUpdate(newCols: number): void {
       this.cols = newCols;
        this.rowHeight = Row_Height[newCols]
  }
  onSelectNewCategory(category:string) : void {
     this.category = category;
       this.getProducts();
  }
 onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
