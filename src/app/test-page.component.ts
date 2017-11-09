import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import { Response, Http} from '@angular/http';

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

  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService.getData().subscribe((data: Response) => this.users = data.json());
  }
}
