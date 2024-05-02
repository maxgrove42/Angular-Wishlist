import {Component, OnInit} from '@angular/core';
import { WishItem} from "../shared/models/wishItem";
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { WishListComponent } from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";
import {EventService} from '../shared/services/EventService'
import {HttpClientModule} from "@angular/common/http";
import {WishService} from "./wish.service";

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
    WishListItemComponent,
    HttpClientModule
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      //remove wish from items.
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1)
      console.log("Deleting: ");
      console.log(wish);
    })
  }

  items : WishItem[] = [];

  filter : any;

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
        (data : any) => {
        this.items = data;
      },
      (error : any) => {
        alert(error.message);
      }
    );
  }
}
