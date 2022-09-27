import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order';
import { OrdersService } from '../../services/orders.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public route: string;
  public label: string;
  public states:string[];
  public collection$:Observable<Order[]>;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.states=Object.values(StateOrder);
    this.title = 'list of orders';
    this.route = 'add';
    this.label = 'add order';
    this.collection$=this.ordersService.collection$;
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat',
    ];

   /* this.ordersService.collection$.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });*/
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }

  changeState(item: Order, $event: any) {
    //console.log($event.target.value);
    const state=$event.target.value;
    this.ordersService.changeState(item,state).subscribe((data)=>{
      //Copier les valeur en gardant les anciens valeurs
      Object.assign(item,data);
    });

  }
}
