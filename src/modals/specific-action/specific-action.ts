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
        something: 2,
        id: 2
    };
    note;
    getAction(id){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificActions(key, id).subscribe(res=>{
                this.note = res.notes;
                console.log(res,'ress');
            })
        })
    }
    icon(x){
        if(x === 'Text Message'){
            return "chatbubbles"
        } else if(x === 'Email'){
            return "mail"
        }
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    ngOnInit(){
        console.log(this.action)
        this.getAction(this.action.id);
    }
    
}