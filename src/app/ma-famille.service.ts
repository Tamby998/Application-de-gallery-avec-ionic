import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from './types';

@Injectable({
  providedIn: 'root'
})
export class MaFamilleService {

  constructor(private httpClient: HttpClient) { }
  getImageFamille(activityId: string): Observable<Activity>{
      return this.httpClient.get<Activity>(API + "/" + activityId);
  }
  getAllImageFamille(): Observable<Activity[]>{
      return this.httpClient.get<Activity[]>(API);
  }
}
const API = "http://localhost:3000/activities";

