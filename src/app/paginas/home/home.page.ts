import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { disableDebugTools } from '@angular/platform-browser';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  imagensGrid!: any[];

  constructor(public nav: NavController) { }

  equipamentos(){
    this.nav.navigateForward('sel-equipamento');
  }

  equipamentoItem(){
    this.nav.navigateForward('add-edit-equipamento-item');
  }

  ngOnInit() {
    this.imagensGrid = [
      {
        img: 'assets/dashboard/disabled.png',
        name: 'Equipamento'
      },
      {
        img: 'assets/dashboard/add.png',
        name: 'Item de Equipamento'
      },
      {
        img: 'assets/dashboard/adult-diapers.png',
        name: 'Fraldas'
      },
      {
        img: 'assets/dashboard/loan.png',
        name: 'Emprestimos'
      }
    ]
  }

  navegacao(){
    
  }

}
