import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEmailDirective } from './validators/app-email.directive';
import { AppImageUrlDirective } from './validators/app-image-url.directive';



@NgModule({
  declarations: [
    AppEmailDirective,
    AppImageUrlDirective
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AppEmailDirective,
    AppImageUrlDirective
  ]
})
export class SharedModule { }
