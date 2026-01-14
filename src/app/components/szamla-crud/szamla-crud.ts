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
  szamlak: SzamlaDto[] = [];
  cegek: CegDto[] = [];
  selectedSzamla: SzamlaDto | null = null;
  editId: number | null = null;

  createForm: SzamlaDto = {
    osszeg: '',
    targy: '',
    fizhat: '',
    fizetve: false,
    cegId: 0
  };

  editForm: SzamlaDto = {
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
    this.loadSzamlak();
    this.loadCegek();
  }

  loadSzamlak(): void {
    this.szamlaService.getSzamlak().subscribe(data => {
      this.szamlak = data;
    });
  }

  loadCegek(): void {
    this.cegService.getCegek().subscribe(data => {
      this.cegek = data;
    });
  }

  selectSzamlaForEdit(szamla: SzamlaDto): void {
    this.selectedSzamla = szamla;
    this.editId = szamla.id || null;
    this.editForm = {
      id: szamla.id,
      osszeg: szamla.osszeg,
      targy: szamla.targy,
      fizhat: szamla.fizhat,
      fizetve: szamla.fizetve,
      cegId: szamla.cegId || 0
    };
  }

  loadSzamlaForEdit(id: number): void {
    if (id) {
      this.szamlaService.getSzamlaById(id).subscribe(szamla => {
        this.selectSzamlaForEdit(szamla);
      });
    }
  }

  createSzamla(): void {
    this.szamlaService.createSzamla(this.createForm).subscribe(() => {
      this.resetCreateForm();
      this.loadSzamlak();
    });
  }

  updateSzamla(): void {
    if (this.editId) {
      this.szamlaService.updateSzamla(this.editId, this.editForm).subscribe(() => {
        this.loadSzamlak();
      });
    }
  }

  deleteSzamla(id: number): void {
    if (confirm('Biztosan törölni szeretné ezt a számlát?')) {
      this.szamlaService.deleteSzamla(id).subscribe(() => {
        this.loadSzamlak();
        if (this.selectedSzamla?.id === id) {
          this.resetEditForm();
        }
      });
    }
  }

  resetCreateForm(): void {
    this.createForm = {
      osszeg: '',
      targy: '',
      fizhat: '',
      fizetve: false,
      cegId: 0
    };
  }

  resetEditForm(): void {
    this.editForm = {
      osszeg: '',
      targy: '',
      fizhat: '',
      fizetve: false,
      cegId: 0
    };
    this.selectedSzamla = null;
    this.editId = null;
  }

}

