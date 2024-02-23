import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  //* EventEmitter admite todo tipo de datos, ya que es un GENERICO y por ello podemos especificar el tipo de dato que fluye a traves de el.
  @Output() //*Con Output conecto al padre con el hijo para que lo escuche.
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //*Asi creamos nuestra instancia de emisor de eventos "new EventEmitter()" para que el padre lo escuche y lo utilice.

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);

    //Aqui verificamos que el nombre no este vacio y de estarlo no envia nada.
    if (this.character.name.length === 0) return;

    //*Y aqui finalmente emitimos el evento con el objeto del personaje creado en la linea 12.
    this.onNewCharacter.emit(this.character);

    //Aqui devolvemos los inputs a su estado original, los limpiamos luego de enviar el form.
    this.character = { name: '', power: 0 };
  }
}
