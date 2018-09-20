import { Component, OnInit, ViewChild} from '@angular/core';
import { OrderService } from './services/order.service';
import {MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditComponent } from './components/edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dataSource;

  constructor(private orderService: OrderService,public dialog: MatDialog){}

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
  
  addDialog(): void {
    const dialogRef = this.dialog.open(AddOrderComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  editDialog(): void {
    const dialogRef = this.dialog.open(EditComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}