import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pipeline',
  templateUrl: 'pipeline.html',
})
export class PipelinePage implements OnInit {
  public slides;
  public prospects;
  public allProspects= [
    {
      name: 'Steve',
      phone: 56,
      tasks: [1,2,3],
      position: 'Acquaintance'
    },
    {
      name: 'Mason',
      phone: 22,
      tasks: [9,8,7],
      position: 'Acquaintance'
    },
    {
      name: 'Meg',
      phone: 99,
      task: ['ok', 5],
      position: 'Future Prospect'
    },
    {
      name: 'Jon',
      phone: 909,
      task: ['yes', 5],
      position: 'Future Prospect'
    },
    {
      name: 'Jack',
      phone: 18,
      task: ['ok', 5],
      position: 'Exposed to essential Oils'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Exposed to essential Oils'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Commited to a Meeting'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Commited to a Meeting'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Attended a Meeting'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Attended a Meeting'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Enrolled'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Enrolled'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Lifestyle & Buisness Overview'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Lifestyle & Buisness Overview'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: '1st Menor Session'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: '1st Menor Session'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Launched'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Launched'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Recognized & Promoted this week'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Recognized & Promoted this week'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Retained 90 Days'
    },
    {
      name: 'James',
      phone: 108,
      task: ['nope', 'fine'],
      position: 'Retained 90 Days'
    },
  ]

  leadsPipe = () => {
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Acquaintance' || x.position === 'Future Prospect')
    })
    this.slides = this.allProspects.filter((x)=>{
      return (x.position === 'Acquaintance' || x.position === 'Future Prospect')
    })
  }

  enrollmentsPipe = () => {
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Exposed to essential Oils' || x.position === 'Future Prospect' || x.position === 'Commited to a Meeting' || x.position === 'Attended a Meeting' || x.position === 'Enrolled')
    })
    this.slides = this.allProspects.filter((x)=>{
      return (x.position === 'Exposed to essential Oils' || x.position === 'Future Prospect' || x.position === 'Commited to a Meeting' || x.position === 'Attended a Meeting' || x.position === 'Enrolled')
    })
  }

  retentionPipe = () => {
    this.prospects = this.allProspects.filter((x)=>{
      return (x.position === 'Enrolled' || x.position === 'Lifestyle & Buisness Overview' || x.position === '1st Menor Session' || x.position === 'Launched' || x.position === 'Recognized & Promoted this week' || x.position === 'Retained 90 Days')
    })
    this.slides = this.allProspects.filter((x)=>{
      return (x.position === 'Enrolled' || x.position === 'Lifestyle & Buisness Overview' || x.position === '1st Menor Session' || x.position === 'Launched' || x.position === 'Recognized & Promoted this week' || x.position === 'Retained 90 Days')
    })
  }

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.leadsPipe();
  }

}
