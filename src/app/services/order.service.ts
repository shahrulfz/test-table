import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderType } from '../types/order.types';

@Injectable()

export class OrderService {

  private serviceUrl = 'http://localhost:4000/orders';

  constructor(private http: HttpClient) { }

  getOrder(): Observable<OrderType[]> {
    return this.http.get<OrderType[]>(this.serviceUrl);
  }

}
