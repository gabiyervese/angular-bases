import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './heros/hero/hero.component';
import { ListComponent } from './heros/list/list.component';

@NgModule({
  declarations: [
    // components
    HeroComponent,
    ListComponent,
  ],
  //aqui exportamos el componente, tambien puedo exportar otras cosas.
  exports: [HeroComponent, ListComponent],
  // CommonModule son los modulos que contienen las directivas incluidas, si en los componentes relacionados a este modulo las utilizo debo importarlo
  imports: [CommonModule],
})
export class HeroesModule {}
