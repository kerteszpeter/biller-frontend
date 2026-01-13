import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CegDto {
  id: number;
  nev: string;
}

@Injectable({
  providedIn: 'root'
})
export class CegService {

  private apiUrl = 'http://localhost:8080/api/cegek';

  constructor(private http: HttpClient) {}

  getCegek(): Observable<CegDto[]> {
    return this.http.get<CegDto[]>(this.apiUrl);
  }
}
