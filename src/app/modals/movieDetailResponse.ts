import { MovieDetail } from './movieDetail';
import { ResponseModal } from './responseModal';

export interface MovieDetailResponse extends ResponseModal {
  data: MovieDetail[];
}
