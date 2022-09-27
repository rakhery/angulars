import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Order} from '../../core/models/order';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {StateOrder} from '../../core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 public collection$:Observable<Order[]>;
 private readonly urlApi:string;
  constructor(private httpClient:HttpClient) {
    this.urlApi=environment.urlApi;
    this.collection$=this.httpClient.get<Order[]>(this.urlApi+'/orders');
    //this.collection$=this.httpClient.get<Order[]>(`t`);
    console.log(this.collection$);
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

   public add(item: Order):Observable<Order> {
    return this.httpClient.post<Order>(`${this.urlApi}/orders`,item);

  }
}
