import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { GetService } from '../../services/getService';

@Component({
  selector: 'page-pipeline',
  templateUrl: 'pipeline.html',
  providers: [GetService]
})
export class PipelinePage implements OnInit {
  constructor(public navCtrl: NavController, private getService: GetService) {

  }

  public title;
  public slides;
  public slidesFilter;
  public prospects;
  public allProspects;

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


  data;
  getProspects = () => {
    this.getService.getProspects().subscribe(res => {
      this.allProspects = res.allProspects;
      console.log(this.allProspects);    
      this.leadsPipe();
    });
  }


  ngOnInit() {
    this.getProspects();
  }

}
