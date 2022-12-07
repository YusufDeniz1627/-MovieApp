import { Category } from "./category";
import { ResponseModal } from "./responseModal";

export interface CategoryResponseModal extends ResponseModal{
    data:Category[]
}