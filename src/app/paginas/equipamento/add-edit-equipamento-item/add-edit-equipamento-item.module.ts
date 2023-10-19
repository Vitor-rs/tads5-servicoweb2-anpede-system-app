import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditEquipamentoItemPageRoutingModule } from './add-edit-equipamento-item-routing.module';

import { AddEditEquipamentoItemPage } from './add-edit-equipamento-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditEquipamentoItemPageRoutingModule
  ],
  declarations: [AddEditEquipamentoItemPage]
})
export class AddEditEquipamentoItemPageModule {}
