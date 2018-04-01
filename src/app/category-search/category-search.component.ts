import {AfterViewInit, ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import { Chart } from 'chart.js';

interface Company {
  name: string;
  phoneNumber: string;
  pocetakUgovora: string;
  istekUgovora: string;
  brKorisnika: string;
  brAkcija: string;
}
@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']

})



export class CategorySearchComponent implements OnInit, AfterViewInit {

  chart = [];
  imena: string[] = ['jedan', 'dva', 'tri'];

  companies: Company[];

  selectedCompany: Company;

  constructor(private cdRef: ChangeDetectorRef) {

    this.companies = [
      {name: 'BigPizza',
        phoneNumber: '066/441-441',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '3691'},
      {name: 'BeoTaxi',
        phoneNumber: '065888888',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '3691'}
    ];
    this.selectedCompany = this.companies[0];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = new Chart('canvas', {
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
          label: 'Broj poziva prema BigPici',
          data: [500, 1000, 700, 850, 100, 500, 1500],
          backgroundColor: [
            'rgb(255, 50, 25)',
            ],
          borderColor: [
            'rgb(255, 50, 25)',
          ],
          fill: false,
        }]
      },

      // Configuration options go here
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    this.cdRef.detectChanges();
  }

}
