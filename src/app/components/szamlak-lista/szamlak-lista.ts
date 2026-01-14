import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SzamlaService, SzamlaDto } from '../../services/szamla';

@Component({
  selector: 'app-szamlak-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './szamlak-lista.html',
  styleUrls: ['./szamlak-lista.css']
})
export class SzamlakListaComponent implements OnInit {

  szamlak: SzamlaDto[] = [];

  constructor(private szamlaService: SzamlaService) {}

  ngOnInit(): void {
    this.szamlaService.getSzamlak().subscribe(data => {
      this.szamlak = data;
    });
  }
}
