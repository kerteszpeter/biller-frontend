import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SzamlaDto {
  id?: number;
  osszeg: string;
  targy: string;
  fizhat: string;
  fizetve: boolean;
  cegId: number;
  cegNev?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SzamlaService {

  private apiUrl = 'http://localhost:9090/api/szamlak';

  constructor(private http: HttpClient) {}

  getSzamlak(): Observable<SzamlaDto[]> {
    return this.http.get<SzamlaDto[]>(this.apiUrl);
  }

  getSzamlaById(id: number): Observable<SzamlaDto> {
    return this.http.get<SzamlaDto>(`${this.apiUrl}/${id}`);
  }

  createSzamla(szamla: SzamlaDto): Observable<SzamlaDto> {
    return this.http.post<SzamlaDto>(this.apiUrl, szamla);
  }

  updateSzamla(id: number, szamla: SzamlaDto): Observable<SzamlaDto> {
    return this.http.put<SzamlaDto>(`${this.apiUrl}/${id}`, szamla);
  }

  deleteSzamla(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
