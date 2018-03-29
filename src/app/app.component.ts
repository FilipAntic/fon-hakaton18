import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCtD1nkTJ-8vKJLBMtF1YC8jxCrIa_7RsE",
      authDomain: "fon-hakaton18.firebaseapp.com"
    })
  }
}
