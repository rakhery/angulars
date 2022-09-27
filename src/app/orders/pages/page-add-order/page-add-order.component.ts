import { Component, OnInit } from '@angular/core';
import {Order} from '../../../core/models/order';
import {OrdersService} from '../../services/orders.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
   public order:Order;
  constructor(private orderService:OrdersService,private router:Router) {
    this.order=new Order();
  }

  ngOnInit(): void {
  }

  action(item: Order) {
    console.log(item);
    this.orderService.add(item).subscribe(()=>{
      this.router.navigate(['orders']);
    });
  }
}
