import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from '../modals/movieDetail';
import { SingleResponseModel } from '../modals/singleResponseModal';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  constructor(private httpClient: HttpClient) {}
}
