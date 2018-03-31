import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {


  cols: any[];

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'usluga', header: 'Usluga' },
      { field: 'najviseTrosi', header: 'Najvise trosi' },
      { field: 'brojLjudi', header: 'Broj ljudi' },
      { field: 'prosek', header: 'Prosek' }
    ];
  }

}
