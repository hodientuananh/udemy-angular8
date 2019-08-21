import { Component } from '@angular/core';
import {ServersService} from './servers.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServersService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSaveServer() {
    this.serverService.storeServer(this.servers)
      .subscribe(
        (response) => {
          console.log(response);
          },
        (err) => {
          console.log(err);
        }
      );
  }
  onGetServers() {
    this.serverService.getServers()
      .subscribe(
        (data: any[]) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      )
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
