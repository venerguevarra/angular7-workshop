import {Component, Injectable, OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{
  name:string = 'Angular';
  prefix:string = '';
  password: string = '';
  constructor(){
   this.name = 'Angular 2';
   console.log('Parent constructor() called');
  }

  onGeneratePassword(pwd: string){
    console.log('clle')
    this.password = pwd;
  }

  ngOnInit(){
    this.name = 'Angular 5';
    console.log('Parent ngOnInit() called');
  }

  ngOnChanges(){
    console.log('Parent ngOnChanges() called');
  }

  ngDoCheck(){
    console.log('Parent ngDoCheck() called')
  }

  ngAfterViewChecked(){
    console.log('Parent ngAfterViewChecked() called');
  }

  ngAfterViewInit(){
    console.log('Parent ngAfterViewInit() called');
  }

  ngAfterContentInit(){
    console.log('Parent ngAfterContentInit() called');
  }

  ngAfterContentChecked(){
    console.log('Parent ngAfterContentChecked() called');
  }

  ngOnDestroy(){
    console.log('Parent ngOnDestroy() called');
  }
}
