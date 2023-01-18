import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { throwError, combineLatest } from 'rxjs';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor (private http:HttpClient) {}

  getData(){
    return this.http.get<data>('https://mmpyikxkcp.us-east-2.awsapprunner.com/v2/1NMfu1bEGNFcTYTFT-jCao_lSbFD8n0ti630iIpRj-hw/949267305')
      .pipe(
        map((response: data) => {
          return response.data?.map((rows: Row) => {
            //console.log(rows.anatomical_structures)
            return rows.anatomical_structures.map((anatomicalStructure: Structure) => {
              //console.log(anatomicalStructure)
              return anatomicalStructure
            });
            //return rows.anatomical_structures
          }
          )  
        }),
        catchError(this.handleError)
      );
  }

  getInfo(id: string){
    id = id.replace(":","_")
    //console.log("Id in service:",id)
    return this.http.get('https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/'+id)
      .pipe(
        map((response: info) => {
          return response._embedded?.terms[0]
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    //console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

export enum BM_TYPE { G = 'gene',
  P = 'protein'
}

export interface Structure {
  name?: string;
  id?: string; 
  rdfs_label?: string; 
  b_type?: BM_TYPE;
}

interface Row {
  anatomical_structures: Array<Structure>; 
  cell_types: Array<Structure>; 
  biomarkers: Array<Structure>;
}

interface data {
  csv?: '';
  data?: Array<Row>;
}

interface Terms {
  name?: string;
  description?: string;
  ontology_link?: string;
  iri?: string;
}

interface info {
  _embedded?: any
}
