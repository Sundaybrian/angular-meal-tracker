import { Meal } from '../../models/meal';
import { MealService } from './../../services/meal.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';




@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  @Output() newFoodOut = new EventEmitter();
  @Input() newFood: Meal = {
    id: 0,
    name: "",
    calories: 0,
    details: ""
  }

  constructor(private mealService: MealService) { }

  ngOnInit() {
  }

  submitFood(ff) {
    console.log(ff);
    this.newFoodOut.emit(this.newFood);
  }



}
