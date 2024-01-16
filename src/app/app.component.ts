import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabezaComponent } from './components/cabeza/cabeza.component';
import { TroncoComponent } from './components/tronco/tronco.component';
import { ColaComponent } from './components/z/cola.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CabezaComponent,TroncoComponent,ColaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section';
}
