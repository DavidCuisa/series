import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiasComponent } from './seires/biografias/biografias.component';
import { SeriesListComponent } from './seires/series-list/series-list.component';

const routes: Routes = [
  {
    path: 'seriesList',
    component:SeriesListComponent
  },
  {
    path: 'biografias',
    component: BiografiasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
