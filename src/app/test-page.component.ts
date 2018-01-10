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

  piOptions = {
    type: 'paragraph',
    title: "Title"
  };

  piOptions2 = {
    type: 'paragraph',
    title: "Title2"
  };

  paragraphOptions = {
    type: 'paragraph',
    content: [
      {
        title: 'Test title 1',
        paragraph: 'Test paragraph 1'
      },
      {
        title: 'Test title 2',
        paragraph: 'Test paragraph 2'
      }
    ]
  };

  listOptions = {
    type: 'list',
    content: ['Item 1', 'Item 2', 'Item 3']
  };

  textOptions = {
    type: 'text',
    content: 'Jast text. Jast text. Jast text.'
  };

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
