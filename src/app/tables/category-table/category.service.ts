import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from './category.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<Category[]> = new BehaviorSubject<
    Category[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Category[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCategorys(): void {
    this.httpClient.get<Category[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addCategory(category: Category): void {
    this.dialogData = category;
  }
  updateCategory(category: Category): void {
    this.dialogData = category;
  }
  deleteCategory(id: number): void {
    console.log(id);
  }

}
