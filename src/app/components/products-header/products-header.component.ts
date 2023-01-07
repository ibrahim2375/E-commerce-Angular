import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columsStyleChange  = new EventEmitter<number>();
   @Output() selectedCategory = new EventEmitter<string>();
   @Output() sortChange = new EventEmitter<string>();
   categorySubscription:Subscription | undefined;
   categories : Array<string> | undefined;
   sort:string= 'desc';
  //  currentItemsNumber:number = 12;
  //  Items_Numbers = [12,20,40];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.categorySubscription = this.dataService.getAllCategories().subscribe(data => {
      this.categories = data
    })
  }
  onSortUpdate(newSort:string): void {
   this.sortChange.emit(newSort);
  }
  // onItemNumberUpdate(newNumber:number): void {
  //     this.currentItemsNumber = newNumber;
  // }
  onColumsUpdate(cols:number): void {
    this.columsStyleChange.emit(cols);
  }
  onSelectCategory(category: string): void {
   this.selectedCategory.emit(category);
 }
 
}
