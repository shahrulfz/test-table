import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

export interface OrderElement {
  serviceNo: string;
  id: number;
  group: string;
  productName: string;
  orderStatus: string;
  remark: string;
  state: string;
}

const ELEMENT_DATA: OrderElement[] = [
  {id: 9, serviceNo: "000745", group: "Consumer", productName: "Streamyx", orderStatus: "Processing", remark: "", state: ""},
  {id: 5, serviceNo: "00567", group: "SME", productName: "Home Line", orderStatus: "Complete", remark: "", state: ""},
  {id: 10, serviceNo: "04949", group: "Consumer", productName: "Streamyx", orderStatus: "Processing", remark: "", state: ""},
  {id: 7, serviceNo: "0994", group: "Consumer", productName: "Business Line", orderStatus: "Processing", remark: "", state: ""},
  {id: 2, serviceNo: "000865", group: "SME", productName: "Home Line", orderStatus: "Complete", remark: "", state: ""},
  {id: 4, serviceNo: "00034", group: "Consumer", productName: "Streamyx", orderStatus: "Complete", remark: "", state: ""},
  {id: 7, serviceNo: "005575", group: "SME", productName: "Home Line", orderStatus: "Processing", remark: "", state: ""},
  {id: 8, serviceNo: "005795", group: "SME", productName: "Business Line", orderStatus: "Complete", remark: "", state: ""},
  {id: 1, serviceNo: "00755", group: "Consumer", productName: "Home Line", orderStatus: "Processing", remark: "", state: ""},
  {id: 3, serviceNo: "0033", group: "Consumer", productName: "Business Line", orderStatus: "Complete", remark: "", state: ""},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public orderData = [];

  displayedColumns: string[] = ['id', 'serviceNo', 'group',  'productName',  'orderStatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;


  }
}

