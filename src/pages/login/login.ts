import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, IonicApp } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  navigateToPage(pageName: string) {
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}