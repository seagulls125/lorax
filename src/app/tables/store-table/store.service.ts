import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from './store.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<Store[]> = new BehaviorSubject<
    Store[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Store[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStores(): void {
    this.httpClient.get<Store[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addStore(store: Store): void {
    this.dialogData = store;
  }
  updateStore(store: Store): void {
    this.dialogData = store;
  }
  deleteStore(id: number): void {
    console.log(id);
  }
}
