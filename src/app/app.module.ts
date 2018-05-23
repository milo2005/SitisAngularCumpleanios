import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BirthdayService } from './services/birthday.service';

@NgModule({
  declarations: [ // Componentes, Pipes, Directivas que tienen visibilidad en modulo
    AppComponent, ToolbarComponent, CalendarComponent
  ],
  imports: [ // Importamos otros modulos
    BrowserModule
  ],
  exports: [], // Especifica que Componentes, pipes, directivas se pueden exportar
  providers: [BirthdayService], // Especificamos los Servicios que tienen visibilidad en todo el modulo
  bootstrap: [AppComponent] // El primer componente en lanzarse
})
export class AppModule { }
