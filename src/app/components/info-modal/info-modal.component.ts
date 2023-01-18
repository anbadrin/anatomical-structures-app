import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/info';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(){
  }

  onNoClick() {
    console.log("On click")
    this.dialogRef.close()
  }
}
