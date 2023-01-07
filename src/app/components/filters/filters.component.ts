import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() selectedCategory = new EventEmitter<string>();
 categories = ['sports' , 'shoes'];
  constructor() { }

  ngOnInit(): void {
  }
 onSelectCategory(category: string): void {
   this.selectedCategory.emit(category);
 }
}
