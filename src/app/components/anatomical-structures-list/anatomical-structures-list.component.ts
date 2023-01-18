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
  structures: Structure[] = [];
  dataLoaded = false;
  label?: string = '';
  description?: string = '';
  obo_id?: string = '';
  iri?: string = '';
  constructor(private dataApi:DataApiService, public dialog: MatDialog) {}

  // This is the on init method and will be called on initialization
  // It gets the data from the api for the names and ids and renders it on the UI
  // This method also makes sure that the unique records based on names are filtered
  ngOnInit(): void {
    this.dataApi.getData().subscribe({
      next: (anatomicalStructures) => {
        anatomicalStructures?.forEach((anatomicalStructure: Array<Structure>) => {
          this.structures = [...this.structures, ...anatomicalStructure];
        });
        this.structures = this.structures.filter((val, i, arr) => {
          return arr.findIndex(elem => elem.name?.toLowerCase() === val.name?.toLowerCase()) === i
        });
        this.dataLoaded = true;
      }, error: (e) => {
        console.log(e);
      }
    });
  }

  // When the name on the landing page is clicked, this method will be invoked
  // This method gets response from the API for the anatomical structures info and passes to the modal component
  onNameClick(id?: string): void {
    if (!id) {
      return;
    }
    this.dataApi.getInfo(id).subscribe((response)=>{
      this.dialog.open(InfoModalComponent, {
        data: response
      });
      
    });
  }
}
