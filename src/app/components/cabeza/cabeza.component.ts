import { Component } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  standalone: true,
  imports: [],
  templateUrl: './cabeza.component.html',
  styleUrl: './cabeza.component.css'
})
export class CabezaComponent {

  // 🧠 Lógica del componente (TypeScript)
  isOpen: boolean = false; // Estado inicial de la ventana: cerrada
  // 🔄 Función para abrir/cerrar la ventana
  toggleWindows() {
  this.isOpen = !this.isOpen;
  console.log(`La ventana está ahora ${this.isOpen ? 'abierta' :
  'cerrada'}.`);
  }
  }
 