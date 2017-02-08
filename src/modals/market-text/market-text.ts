import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/getService';
import { PostService } from '../../services/postService';
import { PipelinePage } from '../../pages/pipeline/pipeline';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-market-text',
  templateUrl: 'market-text.html',
  providers: [ GetService, PostService ]

})
export class MarketText implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events){
        this.option = params.get('option');
    }
    option;

    
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
    }
    
}