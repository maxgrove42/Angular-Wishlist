import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {WishItem} from "../../../shared/models/wishItem";

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  ngOnInit() {
    this.updateFilter('0');
  }
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter : any = '0';

  updateFilter(i: any) {
    this.filter = filters[i];
    this.filterChange.emit(this.filter);
  }
}
