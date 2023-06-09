import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from "primeng/inputswitch";
import {CalendarModule} from "primeng/calendar";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import {MegaMenuModule } from 'primeng/megamenu';
import {RouterModule } from '@angular/router';
import { CascadeSelectModule } from 'primeng/cascadeselect';

import {MenuComponent } from './menu/menu.component';
import {VotanteComponent } from './votantes/votante/votante.component';
import {VotanteListaComponent } from './votantes/votante-lista/votante-lista.component';
import { CronogramaComponent } from './cronogramas/cronograma/cronograma.component';
import { CronogramaListaComponent } from './cronogramas/cronograma-lista/cronograma-lista.component';
import { AprobarComponent } from './aprobacion/aprobar/aprobar.component';
import { AprobarListaComponent } from './aprobacion/aprobar-lista/aprobar-lista.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from  '@angular/common/http';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    VotanteComponent,
    VotanteListaComponent,
    CronogramaComponent,
    CronogramaListaComponent,
    AprobarComponent,
    AprobarListaComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule, 

    ButtonModule,
    InputNumberModule,
    InputTextModule,
    InputSwitchModule,
    CalendarModule,
    PanelModule,
    TableModule,
    CascadeSelectModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
