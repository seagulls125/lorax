import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { BrandPoolService } from '../../brand-pool.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.sass']
})
export class BrandDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BrandDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public brandPoolService: BrandPoolService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.brandPoolService.deleteBrandPool(this.data.id);
  }

  ngOnInit(): void {
  }

}
