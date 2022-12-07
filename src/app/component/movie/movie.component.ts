import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/modals/movie';
import { MovieResponseModal } from 'src/app/modals/movieResponseModal';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { MovieDetail } from 'src/app/modals/movieDetail';
import { MovieDetailResponse } from 'src/app/modals/movieDetailResponse';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}
}
