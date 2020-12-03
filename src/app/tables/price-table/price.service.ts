import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Price } from './price.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<Price[]> = new BehaviorSubject<
    Price[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Price[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllPrices(): void {
    this.httpClient.get<Price[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addPrice(price: Price): void {
    this.dialogData = price;
  }
  updatePrice(price: Price): void {
    this.dialogData = price;
  }
  deletePrice(id: number): void {
    console.log(id);
  }

}
