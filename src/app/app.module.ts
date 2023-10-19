import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipamentoService } from './services/domain/equipamento.service';
import { AssociadoService } from './services/domain/associado.service';
import { EquipamentoItemService } from './services/domain/equipamentoitem.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    EquipamentoService, AssociadoService, EquipamentoItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
