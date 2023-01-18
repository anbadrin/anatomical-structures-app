import { Component, OnInit } from '@angular/core';
import {DataApiService, Structure } from './data-api.service';
import {MatDialog} from '@angular/material/dialog';
import {InfoModalComponent} from './info-modal/info-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'anatomical-structures-app';
  apiNames: string[] = [];
  apiIds: string[] = [];
  label: string = '';
  description: string = '';
  obo_id: string = '';
  iri: string = '';
  constructor(private dataApi:DataApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataApi.getData().subscribe((anatomicalStructures)=>{
      anatomicalStructures?.map((anatomicalStructure: Array<Structure>) => {
        anatomicalStructure.map((anatomy: Structure) => {
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
    this.dataApi.getInfo(id).subscribe((response)=>{
      this.label = response.label
      if (response.description && response.description.length > 0){
        this.description = response.description[0]
      }
      else if (response.annotation.definition && response.annotation.definition.length > 0){
        this.description = response.annotation.definition[0]
      }
      else{
        this.description = 'No description present'
      }
      this.obo_id = response.obo_id
      this.iri = response.iri 
      const dialogRef = this.dialog.open(InfoModalComponent, {
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
