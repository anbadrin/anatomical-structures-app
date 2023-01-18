import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { data, info, Row, Structure } from '../models/data';
import { AppConstants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor (private http:HttpClient) {}

  getData(){
    return this.http.get<data>(AppConstants.DATA_API_ENDPOINT)
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
    return this.http.get(AppConstants.INFO_API_ENDPOINT+id)
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

