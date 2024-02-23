import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuii } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

//MainPage es padre de ListComponent y queremos traer desde main el listado de personajes y recibirlo para mostrarlo en la lista. Para permitir esa comunicacion entre componentes padre a hijo utilizamos el decorador @Input.
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      id: uuii(),
      name: 'Trunks',
      power: 10,
    },
  ];

  //Aqui emitimos del hijo el numero del indice.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //Aqui hacemos el metodo que va a emitir  el evento para eliminar un personaje de la lista.
  onDeleteCharacter(id: string): void {
    console.log(id);

    this.onDelete.emit(id);
  }
}
