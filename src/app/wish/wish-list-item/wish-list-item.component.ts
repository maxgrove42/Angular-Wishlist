import { Component, Input, Output, EventEmitter } from '@angular/core';
import {WishItem} from "../../../shared/models/wishItem";
import {NgClass} from "@angular/common";
import {EventService} from '../../../shared/services/EventService'

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  constructor(private events: EventService) {}

  @Input() wish! : WishItem;

  get cssClasses() {
    //return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {
      'strikeout text-muted': this.wish.isComplete
    };

  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    //this.wish.isComplete.emit(this.fulfilled);
    //console.log(i);
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

}
