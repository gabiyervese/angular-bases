import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  //*Recuerda que aqui definimos las propiedades que habran.
  public heroNames: string[] = [
    'Spiderman',
    'Thor',
    'Hulk',
    'Black Widow',
    'Ironman',
  ];

  public deletedHero?: string;

  removeLastHero(): void {
    // * .pop() remueve el ultimo elemento de la lista y lo muesta/devuelve.
    this.deletedHero = this.heroNames.pop();
  }
}
