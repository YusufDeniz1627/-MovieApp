import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/modals/movieDetail';
import { MovieDetailService } from 'src/app/services/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
