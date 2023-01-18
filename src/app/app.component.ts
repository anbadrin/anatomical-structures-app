import { Component, OnInit, Inject } from '@angular/core';
import {DataApiService, Structure } from './data-api.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'anatomical-structures-app';
  //apiData: Structure[] = [];
  apiNames: string[] = [];
  apiIds: string[] = [];
  label: string = '';
  description: string = '';
  obo_id: string = '';
  iri: string = '';
  constructor(private dataApi:DataApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataApi.getData().subscribe((anatomicalStructures)=>{
      //console.log(anatomicalStructure)
      anatomicalStructures?.map((anatomicalStructure: Array<Structure>) => {
        //console.log(anatomicalStructure)
        anatomicalStructure.map((anatomy: Structure) => {
          //console.log(anatomy)
          if (anatomy.id && anatomy.name && (this.apiNames.indexOf(anatomy.name) === -1)){
            this.apiNames.push(anatomy.name);
            this.apiIds.push(anatomy.id)
          }
        })
      })
    });
    console.log(this.apiIds)
  }

  onNameClick(id: string) {
    //console.log(id)
    this.dataApi.getInfo(id).subscribe((response)=>{
      //console.log(response)
      //console.log(response.label)
      this.label = response.label
      //console.log("Description:",response.description)
      //console.log("Definition:",response.annotation.definition)
      if (response.description && response.description.length > 0){
        //console.log(response.description[0])
        this.description = response.description[0]
      }
      else if (response.annotation.definition && response.annotation.definition.length > 0){
        //console.log(response.annotation.definition[0])
        this.description = response.annotation.definition[0]
      }
      else{
        //console.log("Not present")
        this.description = 'No description present'
      }
      //console.log(response.obo_id)
      //console.log(response.iri)
      this.obo_id = response.obo_id
      this.iri = response.iri 
      const dialogRef = this.dialog.open(InfoComponent, {
        data: {
          label: this.label,
          obo_id: this.obo_id,
          description: this.description,
          iri: this.iri,
        }
      });
    });
  }
}

interface DialogData {
  label: string;
  obo_id: string;
  description: string;
  iri: string;
}

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.css']
})
class InfoComponent {
  constructor(
    public dialogRef: MatDialogRef<InfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    //console.log("On click")
    this.dialogRef.close()
  }
}
