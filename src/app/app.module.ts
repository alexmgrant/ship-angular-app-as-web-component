import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [AppComponent] // notice we remove bootstrap in favour of entryComponents
})
export class AppModule {
  constructor(
    private injector: Injector,
    private router: Router,
    private location: Location
  ) {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });

    customElements.define("app-element", appElement);

    //init router with starting path
    this.router.navigateByUrl(this.location.path(true));

    //on every route change tell router to navigate to defined route
    this.location.subscribe(data => {
      this.router.navigateByUrl(data.url);
    });
  }

  ngDoBootstrap() {}
}
