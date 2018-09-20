import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(public dialogRef:MatDialogRef<EditComponent>,
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

  add(){
    this.dialogRef.close("Data Added");
  }
}
