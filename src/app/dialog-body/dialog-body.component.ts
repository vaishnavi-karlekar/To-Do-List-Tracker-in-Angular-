import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {

  taskTitle: any;
  description: any;
  

 constructor( 
  public dialogRef: MatDialogRef<DialogBodyComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
        ){}

    

  
  onSubmit(){
    this.dialogRef.close({
      title: this.taskTitle,
      desc: this.description
    });
    console.log('data submitted')   
   }
}
 
  
