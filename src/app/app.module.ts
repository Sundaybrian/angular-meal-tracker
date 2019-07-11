import { MealService } from './services/meal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
