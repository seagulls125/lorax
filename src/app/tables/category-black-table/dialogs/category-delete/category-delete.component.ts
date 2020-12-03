import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { CategoryBlackService } from '../../category-black.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.sass']
})
export class CategoryDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CategoryDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public categoryBlackService: CategoryBlackService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.categoryBlackService.deleteCategoryBlack(this.data.id);
  }

  ngOnInit(): void {
  }

}
