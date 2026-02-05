import { Component, signal } from '@angular/core';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';
import { FourthComponent } from './fourth-component/fourth-component';

@Component({
  selector: 'app-root',
  imports: [SecondComponent, ThirdComponent, FourthComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('guevarra-john-fila-b');
  john = "app"
}
