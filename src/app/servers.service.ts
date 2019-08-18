import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServersService {
  constructor(private http: Http) {

  }

  storeServer(servers: any[]) {
    return this.http.post('https://udemy-angular8-71921.firebaseio.com/data.json', servers);
  }
}
