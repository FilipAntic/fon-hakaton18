import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {


  chart = [];
  cols: any[];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

    this.cols = [
      { field: 'usluga', header: 'Usluga' },
      { field: 'najviseTrosi', header: 'Najvise trosi' },
      { field: 'brojLjudi', header: 'Broj ljudi' },
      { field: 'prosek', header: 'Prosek' }
    ];
  }

  ngAfterViewInit() {
    this.chart = new Chart('canvas1', {
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
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
          data: [15, 10, 5, 2, 20, 30, 45],
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
    this.cdRef.detectChanges();
  }

}
