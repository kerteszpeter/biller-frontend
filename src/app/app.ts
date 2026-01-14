import { Component } from '@angular/core';
import { SzamlakListaComponent } from './components/szamlak-lista/szamlak-lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SzamlakListaComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
