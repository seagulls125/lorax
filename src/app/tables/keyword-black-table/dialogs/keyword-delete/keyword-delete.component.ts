import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { KeywordBlackService } from '../../keyword-black.service';

@Component({
  selector: 'app-keyword-delete',
  templateUrl: './keyword-delete.component.html',
  styleUrls: ['./keyword-delete.component.sass']
})
export class KeywordDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KeywordDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public keywordBlackService: KeywordBlackService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.keywordBlackService.deleteKeywordBlack(this.data.id);
  }

  ngOnInit(): void {
  }

}
