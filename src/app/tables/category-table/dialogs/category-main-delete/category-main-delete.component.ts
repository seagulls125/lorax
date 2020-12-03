import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-category-main-delete',
  templateUrl: './category-main-delete.component.html',
  styleUrls: ['./category-main-delete.component.sass']
})
export class CategoryMainDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CategoryMainDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public categoryService: CategoryService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.categoryService.deleteCategory(this.data.id);
  }

  ngOnInit(): void {
  }

}
