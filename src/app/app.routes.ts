import { Routes } from '@angular/router';
import { SzamlakListaComponent } from './components/szamlak-lista/szamlak-lista';
import { SzamlaCrudComponent } from './components/szamla-crud/szamla-crud';
import { CegListaComponent } from './components/ceg-lista/ceg-lista';
import { CegCrudComponent } from './components/ceg-crud/ceg-crud';

export const routes: Routes = [
  { path: '', redirectTo: '/szamlak', pathMatch: 'full' },
  { path: 'szamlak', component: SzamlakListaComponent },
  { path: 'szamlak-kezeles', component: SzamlaCrudComponent },
  { path: 'cegek', component: CegListaComponent },
  { path: 'cegek-kezeles', component: CegCrudComponent }
];


