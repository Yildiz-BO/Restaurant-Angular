import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  constructor(
    private dishService: DishService,
    private promoService: PromotionService,
    private leaderService: LeaderService
  ) {}

  ngOnInit() {
    this.dishService.getFeaturedDish()
    .subscribe( dish => this.dish = dish);
    this.promoService.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
    .subscribe(leader => this.leader = leader);
  }
}