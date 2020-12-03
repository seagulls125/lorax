import { Component, OnInit, ViewChild } from '@angular/core';
import {CategoryBlackTableComponent} from '../../tables/category-black-table/category-black-table.component';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.sass']
})
export class BlackListComponent implements OnInit {

  @ViewChild(CategoryBlackTableComponent) categoryBlack : CategoryBlackTableComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addNew(){
    this.categoryBlack.addNew();
  }


}
