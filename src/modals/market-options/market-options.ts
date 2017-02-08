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
    openModal(option){
        let method = option.method
        console.log(method)
        if(method == 'email'){
            let email = this.modalCtrl.create(MarketEmail, {option: option})
            email.present();
        }else if(method == 'text'){
            let text = this.modalCtrl.create(MarketText, {option: option})
            text.present();
        } else if(method == 'drip'){
            let drip = this.modalCtrl.create(MarketDrip, {option: option})
            drip.present();
        } else {
            alert('Please try again')
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}