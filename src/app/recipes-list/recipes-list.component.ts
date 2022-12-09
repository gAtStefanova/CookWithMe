import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 
  constructor(private apiService:ApiService){}


  ngOnInit(): void {
 //   this.apiService.loadRecipes().subscribe(()=>{   })
  }
}
