import { AfterViewInit, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpService } from '../shared/services/http.service';
import { map } from "rxjs/operator/map";
import { element } from 'protractor';
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
  brojPoziva: number[] = [];
  companies: Company[];
  brojAktAkcija = [12, 17, 15, 9, 7, 14, 13, 21, 18];
  selectedCompany: Company;
  zbirAkcija = 0;

  constructor(private cdRef: ChangeDetectorRef, private httpService: HttpService) {


  }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.httpService.get('category-search/checkDateNumbers?dan=' + this.dani[i]).then((poziv) => {
        this.brojPoziva.push(poziv[0].BROJ);
      });
    }

    this.brojAktAkcija.forEach((element) => {
      this.zbirAkcija += element;
      console.log(this.zbirAkcija);
      console.log(element);
    });
    this.companies = [
      {
        name: 'BigPizza',
        phoneNumber: '066/441-441',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '' + this.zbirAkcija
      },
      {
        name: 'BeoTaxi',
        phoneNumber: '065888888',
        pocetakUgovora: '25.03.2018',
        istekUgovora: '25.03.2019',
        brKorisnika: '12589',
        brAkcija: '' + (this.zbirAkcija - 25)
      }
    ];
    this.selectedCompany = this.companies[0];
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
          }, {
            label: 'Broj aktiviranih akcija',
            data: this.brojAktAkcija,
            backgroundColor: [
              'rgb(0, 0, 0)',
            ],
            borderColor: [
              'rgb(0, 0, 0)',
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

  bigpizza() {
    for (let i = 0; i < this.brojPoziva.length; i++) {
      if (i % 2 == 0) {
        this.brojPoziva[i] += (Math.random() * 20) + 1;
      } else {
        this.brojPoziva[i] -= (Math.random() * 20) + 1;
      }

    }
    for (let i = 0; i < this.brojAktAkcija.length; i++) {
      if (i % 2 == 0) {
        this.brojAktAkcija[i] += (Math.random() * 20) + 1;
      } else {
        this.brojAktAkcija[i] -= (Math.random() * 20) + 1;
      }

    }

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
        }, {
          label: 'Broj aktiviranih akcija',
          data: this.brojAktAkcija,
          backgroundColor: [
            'rgb(0, 0, 0)',
          ],
          borderColor: [
            'rgb(0, 0, 0)',
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
  }
}
