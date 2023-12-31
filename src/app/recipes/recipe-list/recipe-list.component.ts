import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {reduce} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
  ];
  constructor() {
  }

  ngOnInit() {
  }

  protected readonly Recipe = Recipe;
  protected readonly reduce = reduce;
}
