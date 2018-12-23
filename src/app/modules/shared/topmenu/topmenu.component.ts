import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'User List', icon: 'pi pi-fw pi-plus', routerLink : 'user-list' },
      {label: 'Manage User', icon: 'pi pi-fw pi-download'}
    ];
  }

}
