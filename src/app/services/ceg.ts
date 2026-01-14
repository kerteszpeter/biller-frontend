import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CegDto {
  id?: number;
  nev: string;
}

@Injectable({
  providedIn: 'root'
})
export class CegService {

  private apiUrl = 'http://localhost:9090/api/cegek';

  constructor(private http: HttpClient) {}

  getCegek(): Observable<CegDto[]> {
    return this.http.get<CegDto[]>(this.apiUrl);
  }

  getCegById(id: number): Observable<CegDto> {
    return this.http.get<CegDto>(`${this.apiUrl}/${id}`);
  }

  createCeg(ceg: CegDto): Observable<CegDto> {
    return this.http.post<CegDto>(this.apiUrl, ceg);
  }

  updateCeg(id: number, ceg: CegDto): Observable<CegDto> {
    return this.http.put<CegDto>(`${this.apiUrl}/${id}`, ceg);
  }

  deleteCeg(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
