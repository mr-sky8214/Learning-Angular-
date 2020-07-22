import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions() {
    return PROMOTIONS;
  }
  getPromotion(id :string){
    return PROMOTIONS.filter((promotion)=>(promotion.id==id))[0];
  }
  getFeaturedPromotion(){
    return PROMOTIONS.filter((promotion)=>(promotion.featured))[0];
  }
}
