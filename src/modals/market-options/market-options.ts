import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { MarketEmail } from '../market-email/market-email';
import { MarketSocial } from '../market-social/market-social';
import { MarketText } from '../market-text/market-text';
import { MarketDrip } from '../market-drip/market-drip';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-options',
  templateUrl: 'market-options.html',
  providers: [ GetService, PostService ]

})
export class MarketOptions implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events, public modalCtrl: ModalController){
        this.market = params.get('market');
    }
    market = {
        name: '',
        options: ''
    }
    openModal(){
        let modal = this.modalCtrl.create(MarketDrip)
        modal.present();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
        console.log(this.market)
    }
    
}