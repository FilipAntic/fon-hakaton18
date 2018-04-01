import { AfterViewInit, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpService } from '../shared/services/http.service';
import { map } from "rxjs/operator/map";
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
  dani = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  brojPoziva = [];
  companies: Company[];

  selectedCompany: Company;

  constructor(private cdRef: ChangeDetectorRef, private httpService: HttpService) {

    this.companies = [
      {
        name: 'BigPizza',
        phoneNumber: '066/441-441',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '3691'
      },
      {
        name: 'BeoTaxi',
        phoneNumber: '065888888',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '3691'
      }
    ];
    this.selectedCompany = this.companies[0];
  }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.httpService.get('category-search/checkDateNumbers?dan=' + this.dani[i]).then((poziv) => {
        this.brojPoziva.push(poziv[0].BROJ);
      });
      this.brojPoziva.push();
    }

    setTimeout(() => {
      console.log(this.brojPoziva);
      // this.chart.update();
      this.chart = new Chart('canvas', {
        type: 'line',

        // The data for our dataset
        data: {
          labels: this.dani,
          datasets: [{
            label: 'Broj poziva prema ovoj kompaniji',
            data: this.brojPoziva,
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
          legend: {
            labels: {
              fontColor: '#000000'
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        }
      });
    }, 2000);

  }


  ngAfterViewInit() {
    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //
    //   // The data for our dataset
    //   data: {
    //     labels: this.dani,
    //     datasets: [{
    //       label: 'Broj poziva prema BigPici',
    //       data: this.brojPoziva,
    //       backgroundColor: [
    //         'rgb(255, 50, 25)',
    //       ],
    //       borderColor: [
    //         'rgb(255, 50, 25)',
    //       ],
    //       fill: false,
    //     }]
    //   },
    //
    //   // Configuration options go here
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });
    // this.cdRef.detectChanges();
  }

}
