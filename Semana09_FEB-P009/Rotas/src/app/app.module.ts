import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomeDoComponenteComponent } from './components/rota-jreader/nome-do-componente/nome-do-componente.component';
import { RotaJreaderComponent } from './components/rota-jreader/rota-jreader/rota-jreader.component';
import { BuscaComponent } from './components/rota-jreader/components/busca/busca.component';
import { CategoriasComponent } from './components/rota-jreader/components/categorias/categorias.component';
import { FirstCategoriaComponent } from './components/rota-jreader/components/first-categoria/first-categoria.component';
import { LastCategoriaComponent } from './components/rota-jreader/components/last-categoria/last-categoria.component';
import { ListagemComponent } from './components/rota-jreader/components/listagem/listagem.component';
import { SecondCategoriaComponent } from './components/rota-jreader/components/second-categoria/second-categoria.component';
import { ThirdCategoriaComponent } from './components/rota-jreader/components/third-categoria/third-categoria.component';
import { RotaUescAppComponent } from './components/rota-uesc-app/rota-uesc-app.component';
import { DestaquesComponent } from './components/rota-uesc-app/components/destaques/destaques.component';
import { FooterComponent } from './components/rota-uesc-app/components/footer/footer.component';
import { HeaderComponent } from './components/rota-uesc-app/components/header/header.component';
import { MenuComponent } from './components/rota-uesc-app/components/menu/menu.component';
import { NoticiasComponent } from './components/rota-uesc-app/components/noticias/noticias.component';
import { ResultadosComponent } from './components/rota-uesc-app/components/resultados/resultados.component';
import { ServicosComponent } from './components/rota-uesc-app/components/servicos/servicos.component';
import { RotaWikiComponent } from './components/rota-wiki/rota-wiki.component';
import { PesquisaComponent } from './components/rota-wiki/components/pesquisa/pesquisa.component';
import { PipesComponent } from './components/rota-wiki/components/pipes/pipes.component';
import { ResultadoComponent } from './components/rota-wiki/components/resultado/resultado.component';
import { ServicesComponent } from './components/rota-wiki/components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeDoComponenteComponent,
    RotaJreaderComponent,
    BuscaComponent,
    CategoriasComponent,
    FirstCategoriaComponent,
    LastCategoriaComponent,
    ListagemComponent,
    SecondCategoriaComponent,
    ThirdCategoriaComponent,
    RotaUescAppComponent,
    DestaquesComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    RotaWikiComponent,
    PesquisaComponent,
    PipesComponent,
    ResultadoComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
