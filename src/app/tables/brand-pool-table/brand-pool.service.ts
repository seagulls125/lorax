import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrandPool } from './brand-pool.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandPoolService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<BrandPool[]> = new BehaviorSubject<
    BrandPool[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): BrandPool[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllBrandPools(): void {
    this.httpClient.get<BrandPool[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addBrandPool(brandPool: BrandPool): void {
    this.dialogData = brandPool;
  }
  updateBrandPool(brandPool: BrandPool): void {
    this.dialogData = brandPool;
  }
  deleteBrandPool(id: number): void {
    console.log(id);
  }
}
