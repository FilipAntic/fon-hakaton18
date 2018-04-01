import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit, AfterViewInit {

  chart = [];

  constructor(private http: HttpService, private cdRef: ChangeDetectorRef) { }
  data;
  selected;
  display: boolean = false;
  ngOnInit() {
    this.http.get('search-people/predicted').then(el => {
      this.data = el;
      console.clear();
      console.log(this.data);
    });
  }
  ngAfterViewInit(): void {
    this.chart = new Chart('canvas12', {
      type: 'line',

      // The data for our dataset
      data: {
        labels: ["Februar", "Mart", "April"],
        datasets: [{
          label: "Broj poziva u zadnjih 3 meseca",
          backgroundColor: [
            'rgb(237, 11, 11)',
            'rgb(71, 11, 237)',
            'rgb(30, 237, 11)',
            'rgb(237, 146, 11)',
            'rgb(237, 11, 150)',
            'rgb(237, 222, 11)',
            'rgb(14, 207, 204)'
          ],
          borderColor: 'rgb(124, 124, 117)',
          borderWidth: 0.5,
          data: [30, 11, 50]
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          labels: {
            fontColor: 'black'
          }
        }
      }
    });
    console.clear()
    console.log(this.chart)
    this.cdRef.detectChanges();
  }
  onRowSelect($event) {
    console.log($event.data)
    this.display = true;
  }
  onRowUnselect($event) {

  }

}
