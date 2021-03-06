import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData(url: string) {
    // return this.http.get('/api/users.json');
    return this.http.get(url).map(res => res.json());
  }
}
