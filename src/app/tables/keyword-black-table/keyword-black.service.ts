import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeywordBlack } from './keyword-black.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeywordBlackService {

  private readonly API_URL = 'assets/data/advanceTable.json';
  dataChange: BehaviorSubject<KeywordBlack[]> = new BehaviorSubject<
    KeywordBlack[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): KeywordBlack[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllKeywordBlacks(): void {
    this.httpClient.get<KeywordBlack[]>(this.API_URL).subscribe(
      data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  // DEMO ONLY, you can find working methods below
  addKeywordBlack(keywordBlack: KeywordBlack): void {
    this.dialogData = keywordBlack;
  }
  updateKeywordBlack(keywordBlack: KeywordBlack): void {
    this.dialogData = keywordBlack;
  }
  deleteKeywordBlack(id: number): void {
    console.log(id);
  }
}
