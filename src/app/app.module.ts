import { MealService } from './services/meal.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import { MealPostsComponent } from './components/meal-posts/meal-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent,
    MealPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
