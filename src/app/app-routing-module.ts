import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SzamlakListaComponent } from './components/szamlak-lista/szamlak-lista';
import { SzamlaCrudComponent } from './components/szamla-crud/szamla-crud';

const routes: Routes = [
  { path: '', redirectTo: '/szamlak', pathMatch: 'full' },
  { path: 'szamlak', component: SzamlakListaComponent },
  { path: 'szamlak-kezeles', component: SzamlaCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
