import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductPoolService } from '../../product-pool.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.sass']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public productPoolService: ProductPoolService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.productPoolService.deleteProductPool(this.data.id);
  }

  ngOnInit(): void {
  }

}
