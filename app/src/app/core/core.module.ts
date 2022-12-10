import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    CommonModule,
    

  ],exports:[
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
