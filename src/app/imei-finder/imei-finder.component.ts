import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-imei-finder',
  templateUrl: './imei-finder.component.html',
  styleUrls: ['./imei-finder.component.css']
})

export class ImeiFinderComponent implements OnInit, AfterViewInit {

  chart = [];
  telefoni = ['Do 150', '151 - 250', '251-550', '551-750', '751-1000'];
  ukupanBrTela = 10000;
  brojTelefona = [];
  constructor(private cdRef: ChangeDetectorRef) {
    this.brojTelefona = [3000, 2500, 2000, 1500, 1000];
  }

  ngOnInit() {

    // setTimeout(() => {
    //   this.chart = new Chart('canvasimei', {
    //     type: 'doughnut',
    //
    //     // The data for our dataset
    //     data: {
    //       labels: this.telefoni,
    //       datasets: [{
    //         label: 'Broj uredjaja',
    //         data: this.brojTelefona,
    //         backgroundColor: 'rgb(255, 50, 25)'
    //       }]
    //     },
    //   });
    // }, 2000);

  }

  ngAfterViewInit(): void {
    this.chart = new Chart('canvasimei', {
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: this.telefoni,
        datasets: [{
          label: 'Broj uredjaja',
          data: this.brojTelefona,
          backgroundColor: [
            'rgb(105, 226, 48, 210)',
            'rgb(45, 228, 227, 210)',
            'rgb(228, 226, 55, 210)',
            '#e11b22',
            '#e223a8'
          ]
        }]
      },
      options: {
        title:{
          display: true,
          text: 'Broj uredjaja',
          fontColor: '#ffffff'
        },
        legend: {
          labels: {
            fontColor: 'white'
          }
        },
      }
    });
    this.cdRef.detectChanges();
  }

}
