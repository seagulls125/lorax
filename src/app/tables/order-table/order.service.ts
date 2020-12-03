import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './order.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<Order[]> = new BehaviorSubject<
    Order[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Order[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllOrders(): void {
    this.httpClient.get<Order[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addOrder(order: Order): void {
    this.dialogData = order;
  }
  updateOrder(order: Order): void {
    this.dialogData = order;
  }
  deleteOrder(id: number): void {
    console.log(id);
  }

}
