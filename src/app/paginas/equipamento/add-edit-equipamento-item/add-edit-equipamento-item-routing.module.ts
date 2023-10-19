import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditEquipamentoItemPage } from './add-edit-equipamento-item.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditEquipamentoItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditEquipamentoItemPageRoutingModule {}
