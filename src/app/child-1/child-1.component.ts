import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-1',
  template: `
  <div style="border:2px solid red; margin:5px;">
    <p>
      child-1 works!
      child-1 works!
      child-1 works!
      child-1 works!
      
    </p>


    <ng-content select="header"></ng-content>
    <ng-content select="footer"></ng-content>
    <ng-content select="p"></ng-content>
    <ng-content select="h1"></ng-content>
    <ng-content select=".name"></ng-content>
    <ng-content select="#imp"></ng-content>

  `,
  
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
