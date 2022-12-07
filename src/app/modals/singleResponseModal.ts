import { ResponseModal } from './responseModal';

export interface SingleResponseModel<T> extends ResponseModal {
  data: T;
}
