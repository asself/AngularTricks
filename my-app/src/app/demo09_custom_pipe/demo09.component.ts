import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo09',
  template: `
      <h1>hello pipe</h1>
      <p>{{price | currency:'*'}}</p>
    `
})

export class Demo09Component implements OnInit {
  price=100;
  uname = "Harold Finch"
  constructor() { }

  ngOnInit() { }
}
