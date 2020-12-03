import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {

  active_breadcrumb : string;
  subtitle : string;

  constructor() { 
    this.active_breadcrumb = 'Transferred to Store';
    this.subtitle = 'Imported to Store';
  }

  ngOnInit(): void {
  }

  setImported(){
    this.active_breadcrumb = 'Transferred to Store';
    this.subtitle = 'Imported to Store';
  }

  setCriteria(){
    this.active_breadcrumb = 'Doesn\'t meet Criteria';
    this.subtitle = 'Doesn\'t meet Criteria';
  }

  setQueue(){
    this.active_breadcrumb = 'In Queue';
    this.subtitle = 'In Queue';
  }

  setApproval(){
    this.active_breadcrumb = 'Pending Approval';
    this.subtitle = 'Pending Approval';
  }

}
