import { Component, OnInit } from '@angular/core';
import {DataApiService } from '../../services/data-api.service';
import { Structure } from '../../models/app-structure'
import {MatDialog} from '@angular/material/dialog';
import {InfoModalComponent} from '../info-modal/info-modal.component'

@Component({
  selector: 'app-anatomical-structures-list',
  templateUrl: './anatomical-structures-list.component.html',
  styleUrls: ['./anatomical-structures-list.component.css']
})
export class AnatomicalStructuresListComponent implements OnInit{
  apiNames: string[] = [];
  apiIds: string[] = [];
  label?: string = '';
  description?: string = '';
  obo_id?: string = '';
  iri?: string = '';
  constructor(private dataApi:DataApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
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

  onNameClick(id: string): void {
    this.dataApi.getInfo(id).subscribe((response)=>{
      this.dialog.open(InfoModalComponent, {
        data: response
      });
      
    });
  }
}
