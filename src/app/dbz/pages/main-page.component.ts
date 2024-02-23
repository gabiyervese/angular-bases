import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  //* RECORDAR: el selector siempre debe iniciar por "app-"
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  //* aqui tomamos la informacion del servicio con un getter y utilizo el "..." para hacer una copia de los personajes, es mas seguro.
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  //aqui creamos el metodo que recibe el id para eliminar un pj.
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  //aqui creamos el metodo que recibe al personaje del servicio y lo agregamos.
  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
