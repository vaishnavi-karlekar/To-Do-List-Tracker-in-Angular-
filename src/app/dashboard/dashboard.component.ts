import { Component, Inject } from '@angular/core'
import { DialogBodyComponent } from '../dialog-body/dialog-body.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  matDialog: any;
   taskTitle: any;
   description: any;

   constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      
            });
            console.log("please fill data");

    dialogRef.afterClosed().subscribe((response) => {
        this.todo.push(response);
        console.log(response)
        
        
      
    });


  }
    


  todo:any = [];

  done:any = [];

  progress:any = [];

  drop(event:any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  }



