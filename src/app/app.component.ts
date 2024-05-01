import { Component } from '@angular/core';
import { WishItem} from "../shared/models/wishItem";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { WishListComponent } from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import events from './../shared/services/EventService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf,
    NgIf,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    events.listen('removeWish', (wish: any) => {
      //remove wish from items.
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1)
      console.log("Deleting: ");
      console.log(wish);
    })
  }

  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  filter : any;
}
