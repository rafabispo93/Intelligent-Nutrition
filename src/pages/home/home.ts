import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public httpClient: HttpClient) {

    this.data = this.httpClient.post('https://cloud.opencpu.org/ocpu/apps/rbs2rbs/nuttes/R/quest', {'pac': 'renan.bisposilva@gmail.com'}).subscribe(data => {
    }, response => {
        console.log(response);
        
    });
  }

  navigateToVisualizationPage(username) {
    this.navCtrl.push(QuestionsPage, {
      email: this.email
    });
  }

}
