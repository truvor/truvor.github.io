import { enableProdMode, provideZonelessChangeDetection } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from "@angular/router";

import { AppComponent } from "./app/app.component";
import { routes } from "./app/routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideZonelessChangeDetection(),
  ],
}).catch((err) => console.error(err));
