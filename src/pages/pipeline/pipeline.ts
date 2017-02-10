import { Component, OnInit } from '@angular/core';
import { NavController, Slides, ModalController, Events } from 'ionic-angular';
import  { GetService } from '../../services/getService';
import { ViewChild, style, animate, transition, trigger } from '@angular/core';
import { SpecificProspect } from '../../modals/specific-prospect/specific-prospect';
import { AddContact } from '../../modals/add-contact/add-contact';

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

  @ViewChild('pipeSlider') pipeSlider: Slides;

  goToSlide() {
    this.pipeSlider.slideTo(0, 500);
  }

  constructor(public nav: NavController, public modalCtrl: ModalController, private getService: GetService, public events: Events) {
    this.events.subscribe('contactAdded', () => {
      this.leadsPipe();
    })
    this.events.subscribe('pipeAdvance', () => {
      this.getContactPosition();
    })
  }

  public pipelineSteps;
  public title;
  public slides;
  public something;
  public prospects = [];
  public allProspects;
  public pipelineFilter = [];
  public obj;
  dotColor(prosp){
    if(prosp == 0) {
      return "lightgreen";
    } else if(prosp == 1) {
      return "grey";
    } else {
      return "red"
    }
  }
  leadsPipe(){
    this.slides = [];
    this.slides = this.pipelineSteps.filter((x)=>{
        if(this.slides.indexOf(x) === -1) {
        if (x.name === 'Lead' || x.name === 'Future Prospect') {
          this.getContactPosition();
          this.goToSlide();
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
        if(x.name === 'Exposed to Essential Oils' || x.name === 'Future Prospect' || x.name === 'Committed to Meeting' || x.name === 'Attended Meeting' || x.name === 'Enrolled') {
          this.getContactPosition();
          this.goToSlide();
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
          this.getContactPosition();
          return x
        }
      }
    })
    this.title = 'Retention';
  }
  openModal(prospect) {
    this.nav.push(SpecificProspect, {prospect: prospect});
  }
  openAddModal() {
    let modal = this.modalCtrl.create(AddContact);
    modal.present();
  }
  getPipelinePositions = () => {
    this.getService.getStorage().then(key => {
      this.getService.getPipelinePositions(key).subscribe(res => {
        this.pipelineSteps = res;
        this.leadsPipe();
      });
    })
  }
  getContactPosition(){
    this.getService.getStorage().then(key => {
      this.getService.getContactPosition(key).subscribe(res => {
      this.pipelineFilter = [];
      this.prospects = [];
        for(var i = 0; i < res.length; i++){
          for(var x = 0 ; x < res[i].contacts.length; x++){
            let id = res[i].id;
            this.obj = {
              id: id,
              contact: res[i].contacts[x]
            }
            if(this.pipelineFilter.indexOf(this.obj) === -1){
              this.pipelineFilter.push(this.obj);
              this.prospects.push(this.obj);
            }
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
