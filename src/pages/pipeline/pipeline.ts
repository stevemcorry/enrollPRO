import { Component, OnInit } from '@angular/core';
import { NavController, Modal, NavParams, ModalController } from 'ionic-angular';
import  { GetService } from '../../services/getService';
import { ViewChild, style, state, animate, transition, trigger } from '@angular/core';
import { AddProspect } from '../../modals/addProspect/addProspect';

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
  public pipelineSteps = [
    "Acquaintance", "Future Prospect", 'Exposed to essential Oils', 'Commited to a Meeting', 'Attended a Meeting','Enrolled', 'Lifestyle & Buisness Overview', '1st Menor Session', 'Launched', 'Recognized & Promoted this week', 'Retained 90 Days'
  ]
  public title;
  public slides;
  public slidesFilter;
  public prospects;
  public allProspects;
  dotColor = (prosp) => {
    if(prosp[0]) {
      return "lightgreen";
    } else {
      return "grey";
    }
  }
  leadsPipe = () => {
    this.slidesFilter = [];
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Acquaintance' || x.position === 'Future Prospect')
    })
    this.pipelineSteps.filter((x)=>{
      if (this.slidesFilter.indexOf(x) === -1) {
        if (x === 'Acquaintance' || x === 'Future Prospect') {
          this.slidesFilter.push(x)
        }
      }
    })
    this.slides = this.slidesFilter;
    this.title = 'Leads';
  }
  enrollmentsPipe = () => {
    this.slidesFilter = [];
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Exposed to essential Oils' || x.position === 'Future Prospect' || x.position === 'Commited to a Meeting' || x.position === 'Attended a Meeting' || x.position === 'Enrolled')
    })
    this.pipelineSteps.filter((x)=>{
      if(this.slidesFilter.indexOf(x) === -1){
        if(x === 'Exposed to essential Oils' || x === 'Future Prospect' || x === 'Commited to a Meeting' || x === 'Attended a Meeting' || x === 'Enrolled') {
          this.slidesFilter.push(x)
        }
      }
    })
    this.slides = this.slidesFilter;
    this.title = 'Enrollments';
  }
  retentionPipe = () => {
    this.slidesFilter = [];
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Enrolled' || x.position === 'Lifestyle & Buisness Overview' || x.position === '1st Menor Session' || x.position === 'Launched' || x.position === 'Recognized & Promoted this week' || x.position === 'Retained 90 Days')
    })
    this.pipelineSteps.filter((x)=>{
      if(this.slidesFilter.indexOf(x) === -1){
        if(x === 'Enrolled' || x === 'Lifestyle & Buisness Overview' || x === '1st Menor Session' || x === 'Launched' || x === 'Recognized & Promoted this week' || x === 'Retained 90 Days') {
          this.slidesFilter.push(x)
        }
      }
    })
    this.slides = this.slidesFilter;
    this.title = 'Retention';
  }
  getProspects = () => {
    this.getService.getStorage().then(key => {
    this.getService.getContacts(key).subscribe(res => {
      console.log('pipe',res);
      // this.allProspects = res.allProspects; 
      // this.leadsPipe();
    });
    })
  }
  openModal(prospect) {
    let modal = this.modalCtrl.create(AddProspect, {prospect: prospect});
    modal.present();
  }

  ngOnInit() {
    this.getProspects();
  }

}
