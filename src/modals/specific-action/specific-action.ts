import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { SMS, SocialSharing } from 'ionic-native';
import { ModalController, NavParams, ViewController, Events} from 'ionic-angular';

@Component({
  selector: 'page-specific-action',
  templateUrl: 'specific-action.html',
  providers: [ GetService, PostService ]

})
export class SpecificAction implements OnInit{
    constructor(public viewCtrl: ViewController, public params: NavParams, public getService: GetService, public postService: PostService, public events: Events, public modalCtrl: ModalController){
        this.action = params.get('action')
    }
    action = {
        something: 2,
        id: 2,
        contact: {
            id: 0
        }
    };
    note;
    phone
    sendText(){
        SocialSharing.shareViaSMS('whats good', '8012328662').then(()=>{
            alert('sms sent')
        }).catch(()=>{
            alert('no sms sent')
        })
    }
    sendEmail(){
        SocialSharing.canShareViaEmail().then(() => {
            let email = ['stevemcorry@gmail.com']
            SocialSharing.shareViaEmail('Body', 'Subject', email).then(() => {
            }).catch(() => {
                alert('almost')
            });
        }).catch(() => {
            alert('nope')
        });
    }
    getAction(id){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificActions(key, id).subscribe(res=>{
                this.note = res.notes;
            })
            this.getService.getSpecificContact(key, this.action.contact.id).subscribe((phone)=>{
                this.phone = phone.phone
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
        this.getAction(this.action.id);
    }
    
}