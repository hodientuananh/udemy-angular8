import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServersService {
  constructor(private http: Http) {

  }

  storeServer(servers: any[]) {
    return this.http.put('https://udemy-angular8-71921.firebaseio.com/data.json', servers);
  }

  getServers() {
    return this.http.get('https://udemy-angular8-71921.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ));
  }
}
