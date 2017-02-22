import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/postService';
import { GetService } from '../../services/getService';
import { SocialSharing, CallNumber } from 'ionic-native';
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
    name;
    note;
    email;
    phone
    sendText(){
        SocialSharing.shareViaSMS('Hey ' + this.name + '!' , this.phone).then(()=>{
        }).catch(()=>{
            alert('no sms sent')
        })
    }
    sendEmail(){
        SocialSharing.canShareViaEmail().then(() => {
            SocialSharing.shareViaEmail('Body', 'Subject', [this.email]).then(() => {
            }).catch(() => {
                alert('almost')
            });
        }).catch(() => {
            alert('nope')
        });
    }
    callNumber(){
        CallNumber.callNumber(this.phone, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }
    getAction(id){
        this.getService.getStorage().then(key => {
            this.getService.getSpecificActions(key, id).subscribe(res=>{
                this.note = res.notes;
            })
            this.getService.getSpecificContact(key, this.action.contact.id).subscribe(data=>{
                this.phone = data.phone;
                this.email = data.email;
                this.name = data.first_name;
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