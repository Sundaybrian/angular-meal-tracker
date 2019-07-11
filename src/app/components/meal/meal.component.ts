import { MealService } from './../../services/meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  _meals;
  currentMeal: Meal = {
    id: 0,
    name: "",
    calories: 0,
    details: ""
  }

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this._meals = this.mealService.getMeals();
  }

  onNewFood(food) {
    this.mealService.addFood(food);
  }

  editMeal(meal) {
    this.currentMeal = meal;
  }

}
