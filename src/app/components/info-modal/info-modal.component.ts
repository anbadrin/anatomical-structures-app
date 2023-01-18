import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Terms } from 'src/app/models/app-structure';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent{
  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Terms,
  ) {}

  // This method closes the modal
  onNoClick(): void {
    this.dialogRef.close()
  }
}
