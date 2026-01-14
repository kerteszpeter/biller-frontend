import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CegService, CegDto } from '../../services/ceg';

@Component({
  selector: 'app-ceg-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ceg-lista.html',
  styleUrls: ['./ceg-lista.css']
})
export class CegListaComponent implements OnInit {

  cegek: CegDto[] = [];

  constructor(private cegService: CegService) {}

  ngOnInit(): void {
    this.cegService.getCegek().subscribe(data => {
      this.cegek = data;
    });
  }
}

