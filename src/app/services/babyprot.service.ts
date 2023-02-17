
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Protocol } from '../models/babyprot.model';

@Injectable({
  providedIn: 'root'
})
export class BabyprotService {

  constructor(private http: HttpClient) { }

  getProtocol(): Observable<Protocol[]> {
    return this.http.get<Protocol[]>('assets/data/protocol.json').pipe(
      catchError(() => {
        return throwError('Something went wrong!')
      })
    )
  }
}
