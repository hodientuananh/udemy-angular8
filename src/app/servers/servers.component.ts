import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(serverName) {
    this.serverCreated = true;
    this.servers.push(serverName);
    this.serverCreationStatus = 'Server is created ' + serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
