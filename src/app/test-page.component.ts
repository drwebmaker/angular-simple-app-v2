import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-test-page',
  templateUrl: './test-page.component.html'
})
export class TestPageComponent {
  x = 5;
  phones: any[] = [{ model: 'iPhone 7' }, { model: 'LG G 5' }, { model: 'Idol S4' }, { model: 'Honor 9' }, { model: 'Nexus 6P' }];
}
