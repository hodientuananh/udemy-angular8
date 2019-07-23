import {Component, Input, OnInit} from '@angular/core';
import {ServerModel} from '../model/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() server: ServerModel;


  constructor() { }

  ngOnInit() {
  }

}
