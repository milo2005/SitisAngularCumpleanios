import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // El elemento html para usar el componente
  templateUrl: './app.component.html', // URL del template
  styleUrls: ['./app.component.css'], // las urls de los documentos de estilos
  // template: "" // Template del componente
  providers: [] // Especifica los servicios que tiene componente y sus hijos
})
export class AppComponent {
  title = 'app';
}
