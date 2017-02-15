import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { GetService } from '../../services/getService';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
  providers: [GetService]
})
export class GoalsPage implements OnInit{
  @ViewChild('donutCanvas') doughnutCanvas;

  doughnutChart: any;
  constructor(public navCtrl: NavController, public getService: GetService, public events: Events) {
    this.events.subscribe('points', () => {
      this.getContactPosition();
    })
  }

  diamond;
  emerald;
  saphire;
  ruby;
  pearl;
  points = 0;
  goals = [1,2];
  width;

  donutChart(prog){
    if(this.doughnutChart){
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'pie',
            options: {
              elements:{
                arc: {
                  roundedCornersFor: 0
                },
                center: {
                  maxText: '100%',
                  text: '67%',
                  fontColor: '#FF6684',
                  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  fontStyle: 'normal',
                  minFontSize: 1,
					        maxFontSize: 256,
                }
              },
              legend: {
                display: false
              },
              tooltips: {
                  enabled: false
              },
              cutoutPercentage: 78,
            },
            plotOptions: {
                series: {
                    borderRadiusTopLeft: '50%',
                    borderRadiusTopRight: '50%'
                  }
              },
            data: {
                datasets: [{
                    data: prog,
                    backgroundColor: [
                        'lightgreen',
                        'purple',
                    ],
                    borderColor: [
                      'purple',
                      'purple'
                    ]
                }]
            }
        });
  }
  getContactPosition(){
    this.points = 0;
    this.getService.getStorage().then(key => {
      this.getService.getContactPosition(key).subscribe(res => {
      res.filter(x => {
        for(var j = 0; j < x.contacts.length; j++){
          if(x.contacts.length){
            this.points += (x.id * 10);
          }
        }
      })
      this.setPoints(this.points);
      });
    })
  }
  setPoints(x){
    let one = x % 200;
    let two = 200 - one;
    this.donutChart([one, two]);
    let step = Math.floor(x / 200);
    if(step % 5 === 0){
      this.diamond = false;
      this.emerald = false;
      this.saphire = false;
      this.ruby = false;
      this.pearl = false;
    } else if( step % 5 === 4){
      this.diamond = false;
      this.emerald = true;
      this.saphire = true;
      this.ruby = true;
      this.pearl = true;
    } else if( step % 5 === 3){
      this.diamond = false;
      this.emerald = false;
      this.saphire = true;
      this.ruby = true;
      this.pearl = true;
    } else if( step % 5 === 2){
      this.diamond = false;
      this.emerald = false;
      this.saphire = false;
      this.ruby = true;
      this.pearl = true;
    } else if( step % 5 === 1){
      this.diamond = false;
      this.emerald = false;
      this.saphire = false;
      this.ruby = false;
      this.pearl = true;
    } 
    let star = Math.floor(x / 1000);
    if(star === 0 ){
      this.width = '0%';
    } else if(star === 1) {
      this.width = '20%';
    } else if (star === 2){
      this.width = '40%';
    } else if (star === 3){
      this.width = '60%';
    } else if (star === 4){
      this.width = '80%';
    } else {
      this.width = '100%';
    }
  }
  updateChart(data){
    this.donutChart(data);
  }

  ngOnInit(){
    this.donutChart([100,0]);
    this.getContactPosition();
  }
}
