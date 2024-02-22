//Este file explica como funciona el componente, que dependencias tiene, es el file mas importante.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
}
