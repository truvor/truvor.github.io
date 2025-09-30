import {Component, input} from '@angular/core';
import {ItemComponent} from "../item/item.component";

type LinkItem = {
  name: string;
  url: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [
    ItemComponent
  ],
  styleUrl: './card.component.css'
})
export class CardComponent {
  linksList = input([] as LinkItem[]);
}
