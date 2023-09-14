import { Component, OnInit } from '@angular/core';
import { EquipamentoDTO } from 'src/app/models/EquipamentoDTO';
import { EquipamentoService } from 'src/app/services/domain/equipamento.service';

@Component({
  selector: 'app-sel-equipamento',
  templateUrl: './sel-equipamento.page.html',
  styleUrls: ['./sel-equipamento.page.scss'],
})
export class SelEquipamentoPage implements OnInit {

  equipamentos!: EquipamentoDTO[];

  constructor(public equipamentoService: EquipamentoService) { }

  //findall().subscribe(res => {}, err => {})
  ionViewDidEnter(){
    this.equipamentoService.findAll()
                           .subscribe(response => {
                              this.equipamentos = response;
                              //console.log(response);
                           }, error => {
                              console.log(error);
                           });
  }

  ngOnInit() {
  }

}
