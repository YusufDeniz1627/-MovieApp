import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './component/navi/navi.component';
import { CategoryComponent } from './component/category/category.component';
import { MovieComponent } from './component/movie/movie.component';
import { SliderComponent } from './component/slider/slider.component';
import { FooterComponent } from './component/footer/footer.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { TheIslandComponent } from './component/the-island/the-island.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    MovieComponent,
    SliderComponent,
    FooterComponent,
    MovieDetailComponent,
    HomePageComponent,
    TheIslandComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
