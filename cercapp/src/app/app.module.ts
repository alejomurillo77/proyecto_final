import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { RegistroestablecimientoComponent } from './registroestablecimiento/registroestablecimiento.component';
import { DestacadosComponent } from './destacados/destacados.component';
import {FormsModule} from '@angular/forms';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PrincipalComponent,
    RegistrousuarioComponent,
    RegistroestablecimientoComponent,
    DestacadosComponent,
    EstablecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
