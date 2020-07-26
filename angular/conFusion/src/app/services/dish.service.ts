import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, observable, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
      //simulate server latency with 2 second delay 
  }
  getDish(id: string): Observable<Dish> {
    return of (DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
    
  }

  getFeaturedDish(): Observable<Dish> {
    return of (DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
  }