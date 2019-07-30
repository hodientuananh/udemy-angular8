import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myNumbersSubcription: Subscription;
  myObservableSubcription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));
    this.myNumbersSubcription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
    }
    );

    const myObservable = new Observable(function (observer) {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 2000);
      setTimeout(() => {
        observer.error('this is not work');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
    });

    this.myObservableSubcription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('finish');
      }
    );
  }

  ngOnDestroy(): void {
    this.myNumbersSubcription.unsubscribe();
    this.myObservableSubcription.unsubscribe();
  }

}
