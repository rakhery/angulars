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
  public route: string;
  public label: string;
  public headers:string[];


  constructor(private ordersService:OrdersService) {
    this.title="Liste de commandes";
    this.route="add";
    this.label="add order";
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat',
    ];
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
