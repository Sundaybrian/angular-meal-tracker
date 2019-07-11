import { Meals_Data } from './../data/meals-data';
import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';



@Injectable({
  providedIn: 'root'
})

export class MealService {

  __meals = Meals_Data;

  constructor() { }

  getMeals() {
    return this.__meals;
  }

  addFood(food) {
    let mealsLength = this.__meals.length;
    food.id = mealsLength + 1;
    this.__meals.unshift(food);
  }

  updateMeal(meal: Meal) {
    this.__meals.forEach((currentFood, index) => {
      if (meal.id === currentFood.id) {
        this.__meals.splice(index, 1);
        this.__meals.unshift(meal);
      }

    });
  }

  deleteMeal(meal: Meal) {
    this.__meals.forEach((currentFood, index) => {
      if (meal.id === currentFood.id) {
        this.__meals.splice(index, 1);
      }

    });

  }




}
