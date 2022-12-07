import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModal } from '../modals/listResponseModal';
import { Movie } from '../modals/movie';
import { MovieDetail } from '../modals/movieDetail';
import { MovieDetailResponse } from '../modals/movieDetailResponse';
import { MovieResponseModal } from '../modals/movieResponseModal';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}
}
