import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { data, info, Row, Structure, Terms } from '../models/app-structure';
import { AppConstants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor (private http:HttpClient) {}

  // This method gets the data for the name and id of anatomical structures
  // It gets and returns only the anatomical structures by mapping out unnecessary data
  getData(): Observable<Structure[][] | undefined>{
    return this.http.get<data>(AppConstants.DATA_API_ENDPOINT)
      .pipe(
        map((response: data) => {
          return response.data?.map((rows: Row) => {
            return rows.anatomical_structures.map((anatomicalStructure: Structure) => {
              return anatomicalStructure
            });
          }
          )  
        }),
        catchError(this.handleError)
      );
  }

  // This method fetches the information related to a specific anatomical structure and passes it to component
  getInfo(id: string): Observable<Terms>{
    id = id.replace(":","_")
    return this.http.get(AppConstants.INFO_API_ENDPOINT+id)
      .pipe(
        map((response: info) => {
          return response._embedded?.terms[0]
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('A data error occurred, please try again.');
  }
}

