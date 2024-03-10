import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotaWikiComponent } from './components/rota-wiki/rota-wiki.component';
import { RotaJreaderComponent } from './components/rota-jreader/rota-jreader.component';
import { PesquisaComponent } from './components/rota-wiki/components/pesquisa/pesquisa.component';
import { ResultadoComponent } from './components/rota-wiki/components/resultado/resultado.component';
import { WikiService } from './components/rota-wiki/components/services/wiki.service';
import { CategoriasComponent } from './components/rota-jreader/components/categorias/categorias.component';
import { FirstCategoriaComponent } from './components/rota-jreader/components/first-categoria/first-categoria.component';
import { SecondCategoriaComponent } from './components/rota-jreader/components/second-categoria/second-categoria.component';
import { ThirdCategoriaComponent } from './components/rota-jreader/components/third-categoria/third-categoria.component';
import { LastCategoriaComponent } from './components/rota-jreader/components/last-categoria/last-categoria.component';
import { ListagemComponent } from './components/rota-jreader/components/listagem/listagem.component';
import { BoldSearchPipe } from './components/rota-wiki/components/pipes/pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaComponent } from './components/rota-jreader/components/busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    RotaWikiComponent,
    RotaJreaderComponent,
    PesquisaComponent,
    ResultadoComponent,
    CategoriasComponent,
    FirstCategoriaComponent,
    SecondCategoriaComponent,
    ThirdCategoriaComponent,
    LastCategoriaComponent,
    ListagemComponent,
    BoldSearchPipe,
    BuscaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }