import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  questions = this.navParams.get('questions');
  responses = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.responses = {'1':'any', '2':'any', '3':'any'};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
    console.log(this.questions);
    
  }

}
