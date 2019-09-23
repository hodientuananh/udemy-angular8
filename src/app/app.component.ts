import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'udemy-angular8';
  displayedFeature = 'recipe';

  onNavigate(feature: string) {
    this.displayedFeature = feature;
  }

  ngOnInit(): void {
    console.log('init app');
    firebase.initializeApp({
      apiKey: "AIzaSyARKBFRCoqLj9GreYq327r4X7rBQlecnEM",
      authDomain: "udemy-angular8-71921.firebaseapp.com",
      databaseURL: "https://udemy-angular8-71921.firebaseio.com",
      projectId: "udemy-angular8-71921",
      storageBucket: "udemy-angular8-71921.appspot.com",
      messagingSenderId: "432831218323",
      appId: "1:432831218323:web:2fd63d949ddbe852ac4366"
    });
  }
}
