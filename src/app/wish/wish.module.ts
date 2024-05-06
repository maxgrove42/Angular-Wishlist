import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListComponent } from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent} from "./wish-filter/wish-filter.component";
import {WishListItemComponent} from "./wish-list-item/wish-list-item.component";

import {WishService} from "./wish.service";

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    FormsModule,
    HttpClientModule,
    WishService
  ],
  exports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishService
  ]
})
export class WishModule { }
