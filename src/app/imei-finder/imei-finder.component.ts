import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpService } from '../shared/services/http.service';
import { timeout } from 'q';

@Component({
  selector: 'app-imei-finder',
  templateUrl: './imei-finder.component.html',
  styleUrls: ['./imei-finder.component.css']
})

export class ImeiFinderComponent implements OnInit, AfterViewInit {

  chart = [];
  minVrednost: string = '';
  telefoni = ['Do 150', '151 - 250', '251-550', '551-750', '751-1000'];
  ukupanBrTela = 10000;
  brojTelefona = [];
  range = ['150', '151-250', '251-550', '551-750', '751-1000']
  cene = [];
  show: boolean;
  constructor(private cdRef: ChangeDetectorRef, private http: HttpService) {
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
    this.range.forEach(element => {
      if (element.length > 3) {
        let niz = element.split('-');

        this.http.get('search-people/devices?start=' + niz[0] + '&end=' + niz[1]).then((user) => {
          this.cene.push(user[0].devices);
        });
      } else {
        this.http.get('search-people/devices?start=' + element).then((user) => {
          this.cene.push(user[0].devices);
        });
      }

    });

    setTimeout(() => {
      console.log(this.cene)
    }, 2000);

  }

  ngAfterViewInit(): void {
    this.chart = new Chart('canvasimei', {
      type: 'doughnut',

      // The data for our dataset
      data: {
        labels: this.telefoni,
        datasets: [{
          label: 'Broj uredjaja',
          data: this.cene,
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
        title: {
          display: true,
          text: 'Broj uredjaja poredjani po ceni ($)',
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

  pretrazi() {
    this.show = true;
    if (this.minVrednost == '' && !this.minVrednost) {

      this.chart = new Chart('canvasimei', {
        type: 'doughnut',

        // The data for our dataset
        data: {
          labels: this.telefoni,
          datasets: [{
            label: 'Broj uredjaja',
            data: [this.cene],
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
          title: {
            display: true,
            text: 'Broj uredjaja poredjani po ceni ($)',
            fontColor: '#ffffff'
          },
          legend: {
            labels: {
              fontColor: 'white'
            }
          },
        }
      });
    } else {
      this.http.get('search-people/devices?start=' + this.minVrednost).then((user) => {
        this.chart = new Chart('canvasimei', {
          type: 'doughnut',

          // The data for our dataset
          data: {
            labels: ['Do' + this.minVrednost],
            datasets: [{
              label: 'Broj uredjaja',
              data: [user[0].devices],
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
            title: {
              display: true,
              text: 'Broj uredjaja poredjani po ceni ($)',
              fontColor: '#ffffff'
            },
            legend: {
              labels: {
                fontColor: 'white'
              }
            },
          }
        });
        console.log(this.chart)
      });
    }

  }

}

