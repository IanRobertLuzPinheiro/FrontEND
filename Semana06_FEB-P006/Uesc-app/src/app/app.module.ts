import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    DestaqueComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
