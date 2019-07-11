import { MealService } from './../../services/meal.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  _meals;

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this._meals = this.mealService.getMeals();
  }

  onNewFood(food) {
    this.mealService.addFood(food);
  }

}
