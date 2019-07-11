import { MealService } from './../../services/meal.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meal-posts',
  templateUrl: './meal-posts.component.html',
  styleUrls: ['./meal-posts.component.css']
})
export class MealPostsComponent implements OnInit {

  _meals;

  constructor(private mealService: MealService) {

  }

  ngOnInit() {
    this._meals = this.mealService.getMeals();
  }

}
