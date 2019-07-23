import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {ServerModel} from '../model/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @Input() server: ServerModel;
  @ContentChild('contentParagraph', {static: true}) contentParagraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('content paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('content paragraph' + this.contentParagraph.nativeElement.textContent);

  }

}
