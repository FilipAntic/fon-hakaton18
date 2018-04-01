import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  constructor(private http: HttpService) { }
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

  onRowSelect($event) {
    console.log($event.data)
    this.display = true;
  }
  onRowUnselect($event) {

  }

}
