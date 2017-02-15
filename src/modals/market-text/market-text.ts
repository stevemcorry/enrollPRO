import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { ChooseContacts } from '../choose-contacts/choose-contacts';
import { NavController, ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-text',
  templateUrl: 'market-text.html',
  providers: [ GetService, PostService ]

})
export class MarketText implements OnInit{
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events, public modalCtrl: ModalController){
        this.option = params.get('option');
        this.content = this.option.content.fun;
    }
    option;
    content;
    email;
    call;
    follow;
    fun = true;
    direct;
    single = true;
    setContent(content){
        this.direct = false;
        this.fun = false;
        this.content = content;
    }
    contentChoose(x){
        if(x === 'direct'){
            this.content = this.option.content.direct;
        } else {
            this.content = this.option.content.fun;
        }
    }
    nextPage(){
        let modal = this.modalCtrl.create(ChooseContacts);
        modal.present();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}