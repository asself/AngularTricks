import { Component,OnInit } from '@angular/core'

@Component({
  selector: 'demo13-parent',
  template:`
    <h1>这是demo13Parent</h1>
    <hr/>
    <demo13-son [count]="myNum">
      
    </demo13-son>
  `
})

export class Demo13ParentComponent implements OnInit{
  myNum:number = 100;
  constructor(){
  }
  ngOnInit(){

  }

}
