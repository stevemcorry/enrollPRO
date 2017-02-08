import { Component } from '@angular/core';
import { MarketOptions } from '../../modals/market-options/market-options';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-marketing',
  templateUrl: 'marketing.html'
})
export class MarketingPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  markets= [
    {
      name: "Ice Breakers",
      options: [
        1,2,3
      ]
    },
    {
      name: "Meeting Invites",
      options: [
        1,2,3
      ]
    },
    {
      name: "Meeting Reminders",
      options: [
        1,2,3
      ]
    },
    {
      name: "Lifestyle Overview",
      options: [
        1,2,3
      ]
    },
    {
      name: "Recognition",
      options: [
        1,2,3
      ]
    },
    {
      name: "Custom",
      options: [
        1,2,3
      ]
    }
  ]

  openModal(market){
    let modal = this.modalCtrl.create(MarketOptions, {market: market});
    modal.present();
  }
}
