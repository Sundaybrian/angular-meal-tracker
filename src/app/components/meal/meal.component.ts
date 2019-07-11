import { MealService } from './../../services/meal.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  constructor(private mealService: MealService) { }

  ngOnInit() {
  }

  onNewFood(food) {
    this.mealService.addFood(food);
  }

}
