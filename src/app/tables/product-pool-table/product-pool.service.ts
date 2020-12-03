import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductPool } from './product-pool.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductPoolService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<ProductPool[]> = new BehaviorSubject<
    ProductPool[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): ProductPool[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllProductPools(): void {
    this.httpClient.get<ProductPool[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addProductPool(productPool: ProductPool): void {
    this.dialogData = productPool;
  }
  updateProductPool(productPool: ProductPool): void {
    this.dialogData = productPool;
  }
  deleteProductPool(id: number): void {
    console.log(id);
  }
}
