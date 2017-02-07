import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-marketing',
  templateUrl: 'marketing.html'
})
export class MarketingPage {

  constructor(public navCtrl: NavController) {}

  markets= ["Ice Breakers","Meeting Invites","Meeting Reminders","Lifestyle Overview","Recognition","Custom"]

}
