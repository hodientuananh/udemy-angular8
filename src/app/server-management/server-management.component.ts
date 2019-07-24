import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerManagerModel} from '../model/server-manager.model';

@Component({
  selector: 'app-server-management',
  templateUrl: './server-management.component.html',
  styleUrls: ['./server-management.component.css']
})
export class ServerManagementComponent implements OnInit {
  @Output() eventServerCreated = new EventEmitter<ServerManagerModel>();
  @Output() eventBlueprintCreated = new EventEmitter<ServerManagerModel>();
  serverName = '';
  serverContent = '';

  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.eventServerCreated.emit(new ServerManagerModel(this.serverName, this.serverContent));
  }

  addServerBluePrint() {
    this.eventBlueprintCreated.emit(new ServerManagerModel(this.serverName, this.serverContent));
  }

}
