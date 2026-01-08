import {
  enableProdMode,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from "@angular/core";

import { environment } from "./environments/environment";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { AppRoutingModule } from "./app/app-routing.module";
import { NgOptimizedImage } from "@angular/common";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    importProvidersFrom(BrowserModule, AppRoutingModule, NgOptimizedImage),
  ],
}).catch((err) => console.error(err));
