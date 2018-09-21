import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms'
import { OrderService } from '../../services/order.service';
import { SimpledialogComponent } from '../simpledialog/simpledialog.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private orderService:OrderService,
    public dialogRef:MatDialogRef<EditComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {

      //checkbox
      let value;
      if(data.orderStatus === "Processing"){
        value = "1";
      }
      else if(data.orderStatus === "Completed"){
        value = "2";
      }

      this.myForm = this.fb.group({
        options: [value]
      })
    
  }

  ngOnInit() {
  }

  save(id,serviceNumber,group,product,remark,status, state){

    // console.log(id,serviceNumber,group,product,remark,status, state);
    if(status === "1"){
      status = "Processing";
    }
    else if(status === "2"){
      status = "Completed";
    }

    let order = {
      id,
      serviceNo:	serviceNumber,
      group,
      productName:	product,
      orderStatus:	status,
      remark,
      state,
    }
    this.orderService.updateOrder(order).subscribe();

    const dialogRef = this.dialog.open(SimpledialogComponent, {
    });

    dialogRef.afterClosed().subscribe(
      () => {location.reload()}
    );
  }

  delete(id,serviceNumber,group,product,remark,status, state){

    if(status === "1"){
      status = "Processing";
    }
    else if(status === "2"){
      status = "Completed";
    }

    let order = {
      id,
      serviceNo:	serviceNumber,
      group,
      productName:	product,
      orderStatus:	status,
      remark,
      state,
    }

    this.orderService.deleteOrder(order).subscribe();

    const dialogRef = this.dialog.open(SimpledialogComponent, {
    });

    dialogRef.afterClosed().subscribe(
      () => {location.reload()}
    );
  }

}
