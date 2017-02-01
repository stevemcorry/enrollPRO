import { Component, OnInit } from '@angular/core';
import { NavController, Modal, NavParams, ModalController } from 'ionic-angular';
import  { GetService } from '../../services/getService';
import { ViewChild, style, state, animate, transition, trigger } from '@angular/core';

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
  constructor(public modal: ModalController, private getService: GetService) {}

  public dotCheck = false;
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
    this.allProspects.filter((x)=>{
      if (this.slidesFilter.indexOf(x.position) === -1) {
        if (x.position === 'Acquaintance' || x.position === 'Future Prospect') {
          this.slidesFilter.push(x.position)
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
    this.allProspects.filter((x)=>{
      if(this.slidesFilter.indexOf(x.position) === -1){
        if(x.position === 'Exposed to essential Oils' || x.position === 'Future Prospect' || x.position === 'Commited to a Meeting' || x.position === 'Attended a Meeting' || x.position === 'Enrolled') {
          this.slidesFilter.push(x.position)
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
    this.allProspects.filter((x)=>{
      if(this.slidesFilter.indexOf(x.position) === -1){
        if(x.position === 'Enrolled' || x.position === 'Lifestyle & Buisness Overview' || x.position === '1st Menor Session' || x.position === 'Launched' || x.position === 'Recognized & Promoted this week' || x.position === 'Retained 90 Days') {
          this.slidesFilter.push(x.position)
        }
      }
    })
    this.slides = this.slidesFilter;
    this.title = 'Retention';
  }

  getProspects = () => {
    this.getService.getProspects().subscribe(res => {
      this.allProspects = res.allProspects; 
      this.leadsPipe();
    });
  }


  ngOnInit() {
    this.getProspects();
  }

}
