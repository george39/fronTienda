import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      title: 'Abarrotes',
      icono: 'fas fa-angle-double-down',
      submenu: [
        { title: 'Abarrotes', url: '/abarrotes'},
        { title: 'Arroz', url: '/arroz'},

      ]
    }
  ];

  constructor() { }
}
