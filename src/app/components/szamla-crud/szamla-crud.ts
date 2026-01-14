import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SzamlaService, SzamlaDto } from '../../services/szamla';
import { CegService, CegDto } from '../../services/ceg';

@Component({
  selector: 'app-szamla-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './szamla-crud.html',
  styleUrls: ['./szamla-crud.css']
})
export class SzamlaCrudComponent implements OnInit {
  cegek: CegDto[] = [];
  selectedSzamla: SzamlaDto | null = null;
  isEditing: boolean = false;
  isCreating: boolean = false;

  szamlaForm: SzamlaDto = {
    osszeg: '',
    targy: '',
    fizhat: '',
    fizetve: false,
    cegId: 0
  };

  constructor(
    private szamlaService: SzamlaService,
    private cegService: CegService
  ) {}

  ngOnInit(): void {
    this.loadCegek();
  }

  loadCegek(): void {
    this.cegService.getCegek().subscribe(data => {
      this.cegek = data;
    });
  }

  createSzamla(): void {
    this.isEditing = false;
    this.isCreating = true;
    this.selectedSzamla = null;
    this.resetForm();
  }

  editSzamla(szamla: SzamlaDto): void {
    this.selectedSzamla = szamla;
    this.isEditing = true;
    this.szamlaForm = {
      id: szamla.id,
      osszeg: szamla.osszeg,
      targy: szamla.targy,
      fizhat: szamla.fizhat,
      fizetve: szamla.fizetve,
      cegId: szamla.cegId || 0
    };
  }

  saveSzamla(): void {
    if (this.isEditing && this.selectedSzamla?.id) {
      this.szamlaService.updateSzamla(this.selectedSzamla.id, this.szamlaForm).subscribe(() => {
        this.resetForm();
        this.selectedSzamla = null;
        this.isEditing = false;
      });
    } else {
      this.szamlaService.createSzamla(this.szamlaForm).subscribe(() => {
        this.resetForm();
        this.isCreating = false;
      });
    }
  }

  loadSzamlaForEdit(id: number): void {
    if (id) {
      this.szamlaService.getSzamlaById(id).subscribe(szamla => {
        this.editSzamla(szamla);
      });
    }
  }

  deleteSzamlaById(id: number): void {
    if (id) {
      if (confirm('Biztosan törölni szeretné ezt a számlát?')) {
        this.szamlaService.deleteSzamla(id).subscribe(() => {
          if (this.selectedSzamla?.id === id) {
            this.resetForm();
            this.selectedSzamla = null;
            this.isEditing = false;
          }
        });
      }
    }
  }

  cancelEdit(): void {
    this.resetForm();
    this.selectedSzamla = null;
    this.isEditing = false;
    this.isCreating = false;
  }

  resetForm(): void {
    this.szamlaForm = {
      osszeg: '',
      targy: '',
      fizhat: '',
      fizetve: false,
      cegId: 0
    };
  }

}

