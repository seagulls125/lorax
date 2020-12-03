import { Component, OnInit, ViewChild  } from '@angular/core';
import {KeywordBlackTableComponent} from '../../tables/keyword-black-table/keyword-black-table.component';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.sass']
})
export class RestrictedComponent implements OnInit {

  @ViewChild(KeywordBlackTableComponent) keywordBlack : KeywordBlackTableComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addNew(){
    this.keywordBlack.addNew();
  }

}
