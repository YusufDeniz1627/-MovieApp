import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { MovieComponent } from './component/movie/movie.component';
import { TheIslandComponent } from './component/the-island/the-island.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  { path: 'hypatia', component: MovieDetailComponent },
  { path: 'the-ısland', component: TheIslandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
