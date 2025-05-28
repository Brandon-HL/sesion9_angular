import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', email: '@gmail.com'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', email: '@gmail.com'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', email: '@gmail.com'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', email: '@gmail.com'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', email: '@gmail.com'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', email: '@gmail.com'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', email: '@gmail.com'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', email: '@gmail.com'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', email: '@gmail.com'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', email: '@gmail.com'},
];


@Component({
  selector: 'app-clients',
  imports: [MatTableModule

  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'email'];
  dataSource = ELEMENT_DATA;

}
