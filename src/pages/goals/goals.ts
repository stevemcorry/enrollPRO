import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html'
})
export class GoalsPage implements OnInit{
  @ViewChild('donutCanvas') doughnutCanvas;

  doughnutChart: any;
  constructor(public navCtrl: NavController, ) {}

  goals = [1,2];

  donutChart(prog){
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
              cutoutPercentage: 85,
              rotation: -0.5 * Math.PI -.01,

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

  updateChart(data){
    this.donutChart(data);
  }

  ngOnInit(){
    this.donutChart([10,90]);
  }
}
