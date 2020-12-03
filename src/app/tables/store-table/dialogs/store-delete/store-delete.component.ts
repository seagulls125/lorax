import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-delete',
  templateUrl: './store-delete.component.html',
  styleUrls: ['./store-delete.component.sass']
})
export class StoreDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StoreDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public storeService: StoreService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.storeService.deleteStore(this.data.id);
  }

  ngOnInit(): void {
  }

}
