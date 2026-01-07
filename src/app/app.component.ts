import { Component, OnInit } from "@angular/core";
import { umamiAttr } from "./lib/umami";
import { environment } from "../environments/environment";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";
import { MediaBannerComponent } from "./media-banner/media-banner.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [RouterLinkActive, RouterLink, MediaBannerComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // Makes the burger close on click outside the menu
    const menu = document.getElementsByClassName("top-nav")[0];
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target as HTMLElement)) {
        const burger = document.getElementById(
          "menu-toggle",
        ) as HTMLInputElement;
        burger.checked = false;
      }
    });

    if (environment.production) {
      const script = document.createElement("script");
      script.src = "https://cloud.umami.is/script.js";
      script.setAttribute(
        "data-website-id",
        "c25c8dcc-f73a-4fb7-9acd-1363cfdc63f0",
      );
      document.head.appendChild(script);
    }
  }

  closeBurgerMenu = () => {
    const burger = document.getElementById("menu-toggle") as HTMLInputElement;
    if (burger.checked) {
      burger.checked = false;
    }
  };
  protected readonly umamiAttr = umamiAttr;
}
