import { 
    Directive, 
    Input,  
    HostListener,
    ElementRef,
    Renderer2,
    ViewContainerRef,
    AfterViewInit} from '@angular/core';
import { PopoverDirective, PopoverConfig, ComponentLoaderFactory } from 'ngx-bootstrap';

import { Injectable } from '@angular/core';

@Injectable()
export class PopoverTemplateService {
  public template: TemplateRef<{content: string}>;
}

@Directive({
    selector: '[piPopover]'
})

export class PiPopoverDirective extends PopoverDirective {
    // @Input() public piPopover;

    @HostListener('click') onclick() {
        this.toggle();
        console.log(this.isOpen);
        if(!this.isOpen) {
            this.show();
        } else {
            this.hide();
        }
    }

    defaultOptions = {
        placement: "'right'",
        container: "'body'"
    }
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private viewContainer: ViewContainerRef,
        private config: PopoverConfig,
        cis: ComponentLoaderFactory,
        private popoverTemplate: PopoverTemplateService
    ) {
        super(elementRef, renderer, viewContainer, config, cis);
    }
    // showPopover() {
    //     this.popover = this.popoverTemplate.template;

    //     this.placement = 'right';
    //     this.container = 'body';
    // }
    ngAfterViewInit() {
        this.popover = this.popoverTemplate.template;
        console.log(this.popoverTemplate);

        this.placement = 'right';
        // this.container = 'body';
    }
}





import { Component, TemplateRef, ContentChild, ViewChild, AfterContentInit } from '@angular/core';
import { NgForOfContext } from '@angular/common';

export interface User {
    name: string;
    photo: string;
    age: number;
}

@Component({
    selector: 'app-user-list',
    template: `
    <!-- Template 1 -->

    <!-- ng-template #template1 let-paramUser="user" let-param2="secondParam">
        User: {{paramUser}}
        <br />
        Param2: {{param2}}
    </ng-template -->            

    <!-- Template 1 -->

    <ng-template #popoverTemp let-paramUser="user" let-param2="secondParam">
        User 2: {{paramUser}}
        <br />
        Param2: {{param2}}
        </ng-template>       
    
    <!-- Using Templates -->
    <ng-container *ngTemplateOutlet="template2;context: { user: 'users[0].name', secondParam: 'Second Parameter'}"></ng-container>  
  `
})


export class PersonComponent implements AfterContentInit {
    @Input() users: User[];

    @ViewChild('popoverTemp', { read: TemplateRef }) public defaultPopoverTemplate: TemplateRef<any>;

    @Input()
    @ContentChild(TemplateRef)
    public popoverTemplate: TemplateRef<any>;

    constructor(private popoverTemplateService: PopoverTemplateService){}

    public ngAfterContentInit(): void {
        this.popoverTemplateService.template = this.popoverTemplate || this.defaultPopoverTemplate;
      }
}


