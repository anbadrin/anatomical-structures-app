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

  ngOnInit(): void {
    this.dataApi.getData().subscribe({
      next: (anatomicalStructures) => {
        anatomicalStructures?.forEach((anatomicalStructure: Array<Structure>) => {
          this.structures = [...this.structures, ...anatomicalStructure];
        });
        this.structures = this.structures.filter((val, i, arr) => {
          return arr.findIndex(elem => elem.name?.toLowerCase() === val.name?.toLowerCase()) === i
        });
        console.log(this.structures);
        this.dataLoaded = true;
      }, error: (e) => {
        console.log(e);
      }
    });
  }

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
