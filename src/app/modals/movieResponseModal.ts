import { Movie } from "./movie";
import { ResponseModal } from "./responseModal";

export interface MovieResponseModal extends ResponseModal{
    data:Movie[]
}