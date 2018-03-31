import { Component, OnInit } from '@angular/core';

interface Company {
  name: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']

})



export class CategorySearchComponent implements OnInit {



  companies: Company[];

  selectedCompany: Company;

  constructor() {

    this.companies = [
      {name: 'BigPizza', phoneNumber: '066/441-441'},
      {name: 'BeoTaxi', phoneNumber: '065888888'}
    ];
  }

  ngOnInit() {
  }

}
