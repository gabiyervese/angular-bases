import { Component } from '@angular/core';

//*  @Component() es un decorador qu transforma mi class en un componente
@Component({
  //*  selector: indica el nombre del elemento html que va a cargar este componente,
  selector: 'app-counter',

  template: `
    <h3>Counter: {{ counter }}</h3>
    <!-- * Aqui vemos uno de los eventos con la funcion que importamos de app.componentes creada como metodo. -->
    <button (click)="increseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  //* Estos corresponden a metodos que se pasaran como funciones a eventos en el html
  increseBy(value: number): void {
    this.counter = this.counter + value;
  }

  decreaseBy(value: number): void {
    this.counter = this.counter - value;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
