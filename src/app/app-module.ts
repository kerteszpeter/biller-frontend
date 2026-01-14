import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app';
import { SzamlakListaComponent } from './components/szamlak-lista/szamlak-lista';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    SzamlakListaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
