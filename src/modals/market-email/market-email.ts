import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-email',
  templateUrl: 'market-email.html',
  providers: [ GetService, PostService ]

})
export class MarketEmail implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events){
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}