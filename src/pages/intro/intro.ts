import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public camera: Camera) {
  }

  public imgBase64;

  public nome;
  public email;
  public idade;

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.imgBase64 = 'data:image/jpeg;base64,' + imageData;
    
    }, (err) => {
    
      console.log("Error:"+err);
    
    });  
  }

  excluirFoto(){
    this.imgBase64 = '';
  }

  validaPagina(){

    let validar = true;

    if(this.nome == '' || this.nome == null){
      alert("Informe seu nome.");
      validar = false;
    }else if(this.email == '' || this.email == null){
      alert("Informe seu e-mail.");
      validar = false;
    }else if(this.idade == '' || this.idade == null){
      alert("Informe sua idade.");
      validar = false;
    }else if(this.imgBase64 == '' || this.imgBase64 == null){
      alert("Tire uma foto bonita.");
      validar = false;
    }

    if(validar){
      this.setarConfiguracaoCache();
      this.navCtrl.setRoot(HomePage);
    }
  }

  setarConfiguracaoCache(){

    let config = {
      configuracaoSetada: true,
      nome: this.nome,
      idade: this.idade,
      email: this.email,
      imagem: this.imgBase64
    }

    localStorage.setItem("config", JSON.stringify(config));
  }
}
