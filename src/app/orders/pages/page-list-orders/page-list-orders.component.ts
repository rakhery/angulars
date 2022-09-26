import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {Order} from '../../../core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collection!:Order[];
  public title: string;
  constructor(private ordersService:OrdersService) {
    this.title="Liste de commandes";
    this.ordersService.collection$.subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnInit(): void {

  }

  changeTitle() {
    this.title="title changed";
  }
}
