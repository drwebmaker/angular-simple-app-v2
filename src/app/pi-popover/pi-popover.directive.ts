import { 
    Directive, 
    Input,  
    HostListener,
    ElementRef,
    Renderer2,
    ViewContainerRef,
    AfterViewInit} from '@angular/core';
import { PopoverDirective, PopoverConfig, ComponentLoaderFactory } from 'ngx-bootstrap';
import { Subject }    from 'rxjs/Subject';

import { Injectable } from '@angular/core';

@Injectable()
export class PopoverService {
  public template: TemplateRef<any>;

  private dataOptions = new Subject<any>();
  
  dataSource$ = this.dataOptions.asObservable();

  sendData(data: any) {
    this.dataOptions.next(data);
  }

}

@Directive({
    selector: '[piPopover]'
})

export class PiPopoverDirective extends PopoverDirective {
    @Input() public piPopover: string | TemplateRef<any>;
    @Input() public piOptions: any;

    @HostListener('click') onclick() {
        this.toggle();

        if(!this.isOpen) {
            this.show();
        } else {
            this.hide();
        }
        console.log("click");
        this.popverOptions.sendData(this.piOptions)
        
    }

    defaultOptions = {
        placement: "'right'",
        container: "'body'",
        outsideClick: true
    }
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private viewContainer: ViewContainerRef,
        private config: PopoverConfig,
        cis: ComponentLoaderFactory,
        private popoverTemplate: PopoverService,
        private popverOptions: PopoverService
    ) {
        super(elementRef, renderer, viewContainer, config, cis);

        this.placement = 'right';
        this.container = 'body';
        this.outsideClick = true;
    }

    ngAfterViewInit() {
        this.popover = this.piPopover || this.popoverTemplate.template;
    }
}





import { Component, TemplateRef, ContentChild, ViewChild, AfterContentInit } from '@angular/core';
import { NgForOfContext } from '@angular/common';

export interface IPopoverOptions {
    type: any;
    title: any;
}

@Component({
    selector: 'app-user-list',
    templateUrl: './pi-popover.component.html'
})


export class PersonComponent implements AfterContentInit {

    @ViewChild('popoverTemp', { read: TemplateRef }) public defaultPopoverTemplate: TemplateRef<any>

    piOptions = {};

    options: any;

    constructor(
        private popoverTemplate: PopoverService,
        public popverOptions: PopoverService){
            this.popverOptions.dataSource$.subscribe(options => this.options = {...options});
        }

    public ngAfterContentInit(): void {
        this.popoverTemplate.template = this.defaultPopoverTemplate;
    }
}


