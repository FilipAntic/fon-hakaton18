import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpService } from '../shared/services/http.service';


@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {


  chart = [];
  cols: any[];
  data: any;
  display = false;
  row;
  constructor(private cdRef: ChangeDetectorRef, private http: HttpService) { }

  ngOnInit() {

    this.cols = [
      { field: 'usluga', header: 'Usluga' },
      { field: 'najviseTrosi', header: 'Najvise trosi' },
      { field: 'brojLjudi', header: 'Broj ljudi' },
      { field: 'prosek', header: 'Prosek' }
    ];
    this.http.get('search-people/clusters').then((user) => {
      // this.data.push(user);
      this.data = user;
      console.clear()
      console.log(user)
    });

    setTimeout(() => {
      console.log(this.data)
      this.data.forEach(element => {
        if (element.podaci == 0) {
          element.podaci = 'SMS'
        } else if (element.podaci == 1) {
          element.podaci = 'Pozivi'
        } else {
          element.podaci = 'Mobilni podaci'
        }
      });
      this.chart = new Chart('canvas1', {
        type: 'doughnut',

        // The data for our dataset
        data: {
          labels: ["SMS", "Pozivi", "Mobilni podaci"],
          datasets: [{
            label: "My First dataset",
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
            data: [this.data[0].cluster, this.data[2].cluster, this.data[4].cluster],
          }]
        },

        // Configuration options go here
        options: {
          legend: {
            labels: {
              fontColor: 'white'
            }
          }
        }
      });
    }, 2000);
  }

  ngAfterViewInit() {
    this.chart = new Chart('canvas1', {
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ["SMS", "Pozivi", "Mobilni podaci"],
        datasets: [{
          label: "Mesecni broj poziva",
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
          data: [this.data[0].cluster, this.data[2].cluster, this.data[4].cluster],
          fill: false,
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          labels: {
            fontColor: 'white'
          }
        }
      }
    });
    console.log(this.chart)
    this.cdRef.detectChanges();
  }

  showDialog(col) {
    console.log(col)
    this.display = !this.display;
    this.chart = new Chart('canvas1', {
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ["SMS", "Pozivi", "Mobilni podaci"],
        datasets: [{
          label: "My First dataset",
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
          data: [this.data[0].cluster, this.data[2].cluster, this.data[4].cluster],
        }]
      },

      // Configuration options go here
      options: {
        legend: {
          labels: {
            fontColor: 'white'
          }
        }
      }
    });
  }
}
