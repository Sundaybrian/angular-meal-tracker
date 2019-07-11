import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPostsComponent } from './meal-posts.component';

describe('MealPostsComponent', () => {
  let component: MealPostsComponent;
  let fixture: ComponentFixture<MealPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
