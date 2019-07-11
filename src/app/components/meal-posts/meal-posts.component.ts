import { Meals } from './../../data/meal';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-meal-posts',
  templateUrl: './meal-posts.component.html',
  styleUrls: ['./meal-posts.component.css']
})
export class MealPostsComponent implements OnInit {

  _meals = Meals;

  constructor() { }

  ngOnInit() {
  }

}
