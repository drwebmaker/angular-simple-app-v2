import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() private open: boolean;
  @Input() private items: any;
  @Input() private dropdownTitle: string;

  @Output() selectEvent = new EventEmitter();

  onSelect (item) {
    this.selectEvent.emit(item);
  }

  toggleDropdown() {
    this.open = !this.open;
  }

  ngOnInit() {
  }
}
