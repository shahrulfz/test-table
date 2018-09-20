import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddOrderComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  add(){
    this.dialogRef.close("Data Added");
  }
}

