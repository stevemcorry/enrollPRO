import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { NavController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-text',
  templateUrl: 'market-text.html',
  providers: [ GetService, PostService ]

})
export class MarketText implements OnInit{
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events){
        this.option = params.get('option');
        this.content = this.option.content.fun;
    }
    option;
    content;
    email;
    call;
    follow;
    fun = true;
    setContent(content){
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
    // nextPage(){
    //     this.navCtrl.push(ChooseContacts)
    // }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}