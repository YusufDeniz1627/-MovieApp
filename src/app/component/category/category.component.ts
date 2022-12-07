import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modals/category';
import { CategoryResponseModal } from 'src/app/modals/categoryResponseModal';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {}
}
