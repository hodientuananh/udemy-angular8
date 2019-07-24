import { Component } from '@angular/core';
import {ServerModel} from './model/server.model';
import {ServerManagerModel} from './model/server-manager.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-angular8';
  displayedFeature = 'recipe';

  onNavigate(feature: string) {
    this.displayedFeature = feature;
  }
}
