import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-recipes-list',
  templateUrl: './recent-recipes-list.component.html',
  styleUrls: ['./recent-recipes-list.component.css']
})
export class RecentRecipesListComponent implements OnInit {

  constructor(private apiService:ApiService){}


  ngOnInit(): void {
  //  this.apiService.loadRecipes(5).subscribe((value)=>{
   //   console.log(value);
      
  //  })
      
  }
}
