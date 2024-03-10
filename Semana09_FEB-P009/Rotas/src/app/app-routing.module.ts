import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaWikiComponent } from './components/rota-wiki/rota-wiki.component';
import { RotaJreaderComponent } from './components/rota-jreader/rota-jreader.component';

const routes: Routes = [
  { path: 'wiki', component: RotaWikiComponent},
  { path: 'jreader', component: RotaJreaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }