import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any;
  public configAtual;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      this.configAtual = JSON.parse(localStorage.getItem("config"));
      
      if(this.configAtual == null){
        this.rootPage = IntroPage;
      }else{
        if(this.configAtual.configuracaoSetada){
          this.rootPage = HomePage;
        }else{
          this.rootPage = IntroPage;
        }
      }
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
