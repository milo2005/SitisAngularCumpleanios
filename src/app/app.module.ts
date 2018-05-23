import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BirthdayService } from './services/birthday.service';
import { CardComponent } from './components/card/card.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add', component: AddPageComponent },
  { path: '**', component: NotFoundPageComponent }
];


@NgModule({
  declarations: [ // Componentes, Pipes, Directivas que tienen visibilidad en modulo
    AppComponent, ToolbarComponent, CalendarComponent, CardComponent, FechaPipe, MainPageComponent, AddPageComponent, NotFoundPageComponent
  ],
  imports: [ // Importamos otros modulos
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [], // Especifica que Componentes, pipes, directivas se pueden exportar
  providers: [BirthdayService], // Especificamos los Servicios que tienen visibilidad en todo el modulo
  bootstrap: [AppComponent] // El primer componente en lanzarse
})
export class AppModule { }
