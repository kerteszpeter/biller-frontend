import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CegService, CegDto } from '../../services/ceg';

@Component({
  selector: 'app-ceg-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ceg-crud.html',
  styleUrls: ['./ceg-crud.css']
})
export class CegCrudComponent implements OnInit {
  cegek: CegDto[] = [];
  selectedCeg: CegDto | null = null;
  editId: number | null = null;

  createForm: CegDto = {
    nev: ''
  };

  editForm: CegDto = {
    nev: ''
  };

  constructor(private cegService: CegService) {}

  ngOnInit(): void {
    this.loadCegek();
  }

  loadCegek(): void {
    this.cegService.getCegek().subscribe(data => {
      this.cegek = data;
    });
  }

  selectCegForEdit(ceg: CegDto): void {
    this.selectedCeg = ceg;
    this.editId = ceg.id || null;
    this.editForm = {
      id: ceg.id,
      nev: ceg.nev
    };
  }

  loadCegForEdit(id: number): void {
    if (id) {
      this.cegService.getCegById(id).subscribe(ceg => {
        this.selectCegForEdit(ceg);
      });
    }
  }

  createCeg(): void {
    this.cegService.createCeg(this.createForm).subscribe(() => {
      this.resetCreateForm();
      this.loadCegek();
    });
  }

  updateCeg(): void {
    if (this.editId) {
      this.cegService.updateCeg(this.editId, this.editForm).subscribe(() => {
        this.loadCegek();
      });
    }
  }

  deleteCeg(id: number): void {
    if (confirm('Biztosan törölni szeretné ezt a céget?')) {
      this.cegService.deleteCeg(id).subscribe(() => {
        this.loadCegek();
        if (this.selectedCeg?.id === id) {
          this.resetEditForm();
        }
      });
    }
  }

  resetCreateForm(): void {
    this.createForm = {
      nev: ''
    };
  }

  resetEditForm(): void {
    this.editForm = {
      nev: ''
    };
    this.selectedCeg = null;
    this.editId = null;
  }
}

