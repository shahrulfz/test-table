import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(
    private orderService:OrderService,
    public dialogRef:MatDialogRef<AddOrderComponent>,
    public dialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  add(){
    this.dialogRef.close("Data Added");
  }

  addOrder(id,serviceNumber,group,product,remark,status, state){

    let order = {
      id,
      serviceNo:	serviceNumber,
      group,
      productName:	product,
      orderStatus:	status,
      remark,
      state,
    }
  
    this.orderService.addOrder(order).subscribe();
    this.dialogRef.afterClosed();

  }
}

