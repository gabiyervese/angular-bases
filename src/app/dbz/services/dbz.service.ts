import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';
@Injectable({
  providedIn: 'root',
})
export class DbzService {
  //Lista de personajes
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000,
    },
  ];

  //* Aqui creamos el siguiente metodo con el mismo nombre al creado en el componente hijo AddCharacter para que en el html lleven el mismo nombre y se vea uniforme. Y le pasamos como argumento el "character" que el hijo emite y el componente padre esta escuchando.
  addCharacter(character: Character): void {
    const newCharacter: Character = {
      //aqui agregamos todas las propiedades ya existentes y adicional el id
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }

  //aqui creamos el metodo en el padre para recibir el evento  del hijo y mostrarlo en la vista.
  deleteCharacterById(id: string): void {
    //con .splicce tomamos el indice del personajes que seleccionamos con el boton para eliminarlo y borrara solo ese elemento
    // this.characters.splice(index, 1);

    //*aqui filtramos el id que coincide con el argumento que le pasamos al metodo para eliminarlo a traves de su id.
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  constructor() {}
}
