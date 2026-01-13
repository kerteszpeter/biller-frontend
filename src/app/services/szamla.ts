import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SzamlaDto {
  id: number;
  osszeg: string;
  targy: string;
  fizhat: string;
  fizetve: boolean;
  cegNev: string;
}

@Injectable({
  providedIn: 'root'
})
export class SzamlaService {

  private apiUrl = 'http://localhost:8080/api/szamlak';

  constructor(private http: HttpClient) {}

  getSzamlak(): Observable<SzamlaDto[]> {
    return this.http.get<SzamlaDto[]>(this.apiUrl);
  }
}
