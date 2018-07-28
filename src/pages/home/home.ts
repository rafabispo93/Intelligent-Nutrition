import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QuestionsPage } from '../questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  password: any;
  email: any;
  questions_received: any;
  constructor(public navCtrl: NavController, public httpClient: HttpClient, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    
  }

  navigateToQuestionsPage() {
    let loading = this.loadingCtrl.create({
      content: 'Por favor Aguarde...'
    });
  
    loading.present();
    this.data = this.httpClient.get('https://beta.rstudioconnect.com/content/3824/quest?pac=' + this.email).subscribe(data => {
      this.questions_received = data;
      console.log(data);
      loading.dismiss();
      if(data[0] && data[1] && data[2]) {
        this.navCtrl.push(QuestionsPage, {
          email: this.email,
          questions: this.questions_received
        });
        
      } else {
        let alert = this.toastCtrl.create({
          message: "Login Inválido",
          duration: 3000,
          position: 'bottom'
        });
        alert.present();
      }
    });
    
  }

}
