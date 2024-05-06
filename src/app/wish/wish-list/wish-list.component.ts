import { Component, Input } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {WishItem} from "../../../shared/models/wishItem";
import {WishListItemComponent} from "../wish-list-item/wish-list-item.component";


@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    WishListItemComponent
  ],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  @Input() wishes: WishItem[] = [];

}
