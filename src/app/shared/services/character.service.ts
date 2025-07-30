import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';

import { Character } from '@shared/interfaces/character.interface';
import { environment } from '@environment/environment';
import { catchError } from 'rxjs/operators';
import { TrackHttpError } from '@shared/models/trackHttpError';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAll():Observable<any> {
    return this.http.get<any>('/product');
  }

  searchCharacters():Observable<Character[]> {
    const filter = '/product';
    return this.http.get<Character[]>(filter)
    
  }

  getDetails(id: number) {
    return this.http.get<Character>('/product');
    
  }


  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<TrackHttpError>{

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
