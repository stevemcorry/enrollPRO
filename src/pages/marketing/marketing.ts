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
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    },
    {
      name: "Meeting Invites",
      options: [
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    },
    {
      name: "Meeting Reminders",
      options: [
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    },
    {
      name: "Lifestyle Overview",
      options: [
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    },
    {
      name: "Recognition",
      options: [
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    },
    {
      name: "Custom",
      options: [
        {
          method: "drip",
          title: "Natural Solutions",
          body: "ALL NATURAL"
        },
        {
          method: "email",
          title: "Frankincense Pip",
          body: "This is good stuff"
        },
        {
          method: "text",
          title: "Daily Routine",
          body: "scrubadub dub"
        }
      ]
    }
  ]

  openModal(market){
    this.navCtrl.push(MarketOptions, {market: market});
  }
}
