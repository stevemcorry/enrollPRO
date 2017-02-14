import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { AddAction } from '../add-action/add-action';
import { ModalController, Platform, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-specific-action',
  templateUrl: 'specific-action.html',
  providers: [ GetService, PostService ]

})
export class SpecificAction implements OnInit{
    constructor(public viewCtrl: ViewController, public platform: Platform, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events, public modalCtrl: ModalController){
        this.action = params.get('action')
    }
    action = {
        something: 2
    };
    // getAction(){
    //     this.getService.getStorage().then(key => {
    //         this.getService.getSpecificActions(key, this.id).subscribe(res=>{
    //             this.action = res;
    //             console.log(res);
    //         })
    //     })
    // }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
        console.log(this.action)
        // this.getAction();
    }
    
}