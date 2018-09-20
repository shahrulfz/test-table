import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderType } from '../types/order.types';

@Injectable()

export class OrderService {

  private serviceUrl = 'http://localhost:4000/orders';

  constructor(private http: HttpClient) { }

  getOrder(): Observable<OrderType[]> {
    return this.http.get<OrderType[]>(this.serviceUrl);
  }

  // updateOrder(data: OrderType): Observable<OrderType[]>{
  //   console.log(data);
  //   console.log(data.id);
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  //   };

  //   return this.http.put<any>(`${this.serviceUrl}/${data.id}`, data, httpOptions);

  // }

  addOrder(order: OrderType): Observable<OrderType> {


    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.post<OrderType>(this.serviceUrl, order, httpOptions)
    .pipe();
  }

}
