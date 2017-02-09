import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { MarketEmail } from '../market-email/market-email';
import { MarketSocial } from '../market-social/market-social';
import { MarketText } from '../market-text/market-text';
import { MarketDrip } from '../market-drip/market-drip';
import { ModalController, Platform, NavParams, NavController, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-options',
  templateUrl: 'market-options.html',
  providers: [ GetService, PostService ]

})
export class MarketOptions implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events, public modalCtrl: ModalController, public navCtrl: NavController){
        this.market = params.get('market');
    }
    market = {
        name: '',
        options: ''
    }
    openModal(option){
        let method = option.method
        if(method == 'email'){
            this.navCtrl.push(MarketEmail, {option: option})
        }else if(method == 'text'){
            this.navCtrl.push(MarketText, {option: option})
        } else if(method == 'drip'){
            this.navCtrl.push(MarketDrip, {option: option})
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