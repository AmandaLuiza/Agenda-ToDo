import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Element } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: Element;
  isChange: boolean;


  constructor(
      public dialogRef: MatDialogRef<ElementDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Element) {}


  ngOnInit(): void {
    if(this.data.position != null){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
