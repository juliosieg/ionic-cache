import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nome;
  public email;
  public idade;
  public imgBase64;

  constructor(public navCtrl: NavController) {

    let configAtual = JSON.parse(localStorage.getItem("config"));

    this.nome = configAtual.nome;
    this.email = configAtual.email;
    this.idade = configAtual.idade;
    this.imgBase64 = configAtual.imagem;

  }

  esquecer(){
    localStorage.removeItem("config");
    this.navCtrl.setRoot(IntroPage);
  }

}
