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
  serverElements = [new ServerModel('server', 'Vista', 'Beta'),
    new ServerModel('server', 'El Capital', 'Official'),
    new ServerModel('blueprint', '12.04 LTS', 'Official')];

  addServer(server: ServerManagerModel) {
    this.serverElements.push({
      type: 'server',
      name: server.name,
      content: server.content
    });
  }

  addServerBluePrint(server: ServerManagerModel) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.name,
      content: server.content
    });
  }
  displayedFeature = 'recipe';

  onNavigate(feature: string) {
    this.displayedFeature = feature;
  }
}
