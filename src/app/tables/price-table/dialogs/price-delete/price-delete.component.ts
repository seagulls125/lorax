import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { PriceService } from '../../price.service';

@Component({
  selector: 'app-price-delete',
  templateUrl: './price-delete.component.html',
  styleUrls: ['./price-delete.component.sass']
})
export class PriceDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PriceDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public priceService: PriceService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.priceService.deletePrice(this.data.id);
  }

  ngOnInit(): void {
  }

}
