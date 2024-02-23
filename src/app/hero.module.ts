import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './heros/hero/hero.component';
import { ListComponent } from './heros/list/list.component';

@NgModule({
  declarations: [
    // components
    HeroComponent,
  ],
  //aqui exportamos el componente que contiene el modulo que queremos compartir, tambien puedo exportar otras cosas.
  exports: [HeroComponent],
  // CommonModule son los modulos que contienen las directivas incluidas, si en los componentes relacionados a este modulo las utilizo debo importarlo
  imports: [CommonModule],
})
export class HeroesModule {}
