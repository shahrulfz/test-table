import { Component, OnInit, ViewChild} from '@angular/core';
import { OrderService } from './services/order.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dataSource;

  constructor(private orderService: OrderService){}

  displayedColumns: string[] = ['id', 'serviceNo', 'group',  'productName',  'orderStatus'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.orderService.getOrder().subscribe(data => {
      
      if(!data){
        return;
      }

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });   


  }

}