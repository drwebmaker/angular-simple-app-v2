import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';

import {User} from './user';

@Component({
  selector: 'my-test-page',
  templateUrl: './test-page.component.html',
  providers: [HttpService]
})
export class TestPageComponent implements OnInit {
  title = 'Letslearn';
  x = 5;
  phones: any[] = [{ model: 'iPhone 7' }, { model: 'LG G 5' }, { model: 'Idol S4' }, { model: 'Honor 9' }, { model: 'Nexus 6P' }];

  users: User[] = [];

  name: string = "Tom";
  items: any = [];
  dropdownTitle: string = "Button dropdown";

  processSelectEvent (e) {
    console.log(e);
  }

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService.getData('/api/users.json').subscribe((data) => this.users = data);
    this.httpService.getData('/api/items.json').subscribe((data) => this.items = data);
  }
}
