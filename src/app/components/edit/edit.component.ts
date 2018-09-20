import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms'
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(
    // private orderService:OrderService,
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

  save(data){

  //   let test = {
  //   id:	data.id,
  //   serviceNo:	"cuba",
  //   group:	"cuba",
  //   productName:	"cuba",
  //   orderStatus:	"cuba",
  //   remark:	"cuba",
  //   state:	"cuba"
  //   }
  //   this.orderService.updateOrder(test);
  //   this.dialogRef.close("Data Added");
  }
}
