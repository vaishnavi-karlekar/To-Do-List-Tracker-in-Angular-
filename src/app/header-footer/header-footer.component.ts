import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent {
  constructor( private matDialog:MatDialog){
  }

  openDialog(){
    this.matDialog.open(DialogBodyComponent,{
      width: '500px',
    })
  }
}
