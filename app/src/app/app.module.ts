import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { RecentRecipesListComponent } from './recent-recipes-list/recent-recipes-list.component';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
        MainComponent,
    RecentRecipesListComponent
  ],
  imports: [
    AuthModule,
    RecipeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }