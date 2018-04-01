import { Component, OnInit ,Input } from '@angular/core'

@Component({
  selector: 'demo13-son',
  template:``
})

export class Demo13SonComponent implements OnInit{
  @Input() count:any = null;
  constructor(){

  }
  ngOnInit(){
    console.log(this.count)
  }

}
