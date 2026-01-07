import { Component } from '@angular/core';
import linksList from '../../assets/data/link-data/trinity.json';
import { CardComponent } from '../card/card.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-trinity',
    templateUrl: './trinity.component.html',
    styleUrls: ['./trinity.component.css'],
    imports: [CardComponent, NgOptimizedImage]
})
export class TrinityComponent {
  linksList = linksList;
}
