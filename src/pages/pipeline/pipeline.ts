import { Component, OnInit } from '@angular/core';
import { NavController, Modal, NavParams, ModalController } from 'ionic-angular';
import  { GetService } from '../../services/getService';
import { ViewChild, style, state, animate, transition, trigger } from '@angular/core';
import { SpecificProspect } from '../../modals/specific-prospect/specific-prospect';

@Component({
  selector: 'page-pipeline',
  templateUrl: 'pipeline.html',
  providers: [GetService],
  animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(200, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(200, style({opacity:0})) 
    ])
  ])
]
})
export class PipelinePage implements OnInit {
  constructor(public nav: NavController, public modalCtrl: ModalController, private getService: GetService) {}

  public dotCheck = false;
  public pipelineSteps;
  public title;
  public slides;
  public something;
  public prospects = [];
  public allProspects;
  dotColor(prosp){
    if(prosp) {
      return "lightgreen";
    } else {
      return "grey";
    }
  }
  leadsPipe(){
    this.slides = [];
    this.slides = this.pipelineSteps.filter((x)=>{
        if(this.slides.indexOf(x) === -1) {
        if (x.name === 'Lead' || x.name === 'Future Prospect') {
          this.getContactPosition(x.id);
          return x;
        }
      }
    })
    this.title = 'Leads';
  }
  enrollmentsPipe = () => {
    this.slides = [];
    this.slides = this.pipelineSteps.filter((x)=>{
      if(this.slides.indexOf(x) === -1){
        if(x.name === 'Exposed to Essential Oils' || x.name === 'Future Prospect' || x.name === 'Commited to Meeting' || x.name === 'Attended Meeting' || x.name === 'Enrolled') {
          this.getContactPosition(x.id);
          return x
        }
      }
    })
    this.title = 'Enrollments';
  }
  retentionPipe = () => {
    this.slides = [];
    this.slides = this.pipelineSteps.filter((x)=>{
      if(this.slides.indexOf(x) === -1){
        if(x.name === 'Enrolled' || x.name === 'Lifestyle/Buisness Overview' || x.name === 'Had First Menor Session' || x.name === 'Launched' || x.name === 'Recognized/Promoted' || x.name === 'Retained 90 Days') {
          this.getContactPosition(x.id);
          return x
        }
      }
    })
    this.title = 'Retention';
  }
  openModal(prospect) {
    let modal = this.modalCtrl.create(SpecificProspect, {prospect: prospect});
    modal.present();
  }
  getPipelinePositions = () => {
    this.getService.getStorage().then(key => {
      this.getService.getPipelinePositions(key).subscribe(res => {
        this. pipelineSteps = res
        this.leadsPipe();
      });
    })
  }
  getContactPosition(id){
    this.getService.getStorage().then(key => {
      this.getService.getContactPosition(key, id).subscribe(res => {
        for(var i = 0; i < res.contacts.length; i++){
          if (this.prospects[0]){
            for(var x = 0; x < this.prospects.length; x++){
              if(this.prospects[x] !== res.contacts[i]){
                console.log(this.prospects[x], res.contacts[i]);
                this.prospects.push(res.contacts[i])
              } 
            }
          } else {
            this.prospects.push(res.contacts[i])
          }
        }
      });
    })
  }
  getProspects = () => {
    this.getService.getStorage().then(key => {
      this.getService.getContacts(key).subscribe(res => {

      });
    })
  }

  ngOnInit() {
    this.getPipelinePositions();
    this.getProspects();
  }

}
