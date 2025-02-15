import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'risky-landing';

  ngOnInit() {
    // Makes the burger close on click outside the menu
    const menu = document.getElementsByClassName('top-nav')[0];
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target as HTMLElement)) {
        const burger = document.getElementById('menu-toggle') as HTMLInputElement;
        burger.checked = false;
      }
    });
  }

  closeBurgerMenu = () => {
    const burger = document.getElementById('menu-toggle') as HTMLInputElement;
    if (burger.checked) {
      burger.checked = false;
    }
  }
}
