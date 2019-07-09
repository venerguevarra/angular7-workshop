import { Component, Injectable, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() salt: string;
  @Output() generatePassword: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    this.salt = '';
    console.log('Child constructor() called');
  }

  random() {
    var t = new Date().getTime();
    this.generatePassword.emit(this.salt + t.toString());
  }

  ngOnInit() {
    console.log('Child ngOnInit() called');
  }

  ngOnChanges() {
    console.log('Child ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('Child ngDoCheck() called');
  }

  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked() called');
  }

  ngAfterViewInit() {
    console.log('Child ngAfterViewInit() called');
  }

  ngAfterContentInit() {
    console.log('Child ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked() called');
  }

  ngOnDestroy() {
    console.log('Child ngOnDestroy() called');
  }

}