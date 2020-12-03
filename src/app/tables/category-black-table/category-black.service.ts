import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryBlack } from './category-black.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryBlackService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<CategoryBlack[]> = new BehaviorSubject<
    CategoryBlack[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): CategoryBlack[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCategoryBlacks(): void {
    this.httpClient.get<CategoryBlack[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addCategoryBlack(CategoryBlack: CategoryBlack): void {
    this.dialogData = CategoryBlack;
  }
  updateCategoryBlack(CategoryBlack: CategoryBlack): void {
    this.dialogData = CategoryBlack;
  }
  deleteCategoryBlack(id: number): void {
    console.log(id);
  }
}
