import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { RecentRecipesListComponent } from './recent-recipes-list/recent-recipes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    MainComponent,
    RecentRecipesListComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
