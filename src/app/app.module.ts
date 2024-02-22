import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './hero.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  //aqui van los modulos que quiero importar
  imports: [BrowserModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
