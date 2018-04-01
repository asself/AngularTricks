import { Component,OnInit } from '@angular/core'

@Component({
  selector: 'demo13-parent',
  template:`
    <h1 class="header">这是demo13Parent</h1>
    <div class="parent">
      <h2>Hello world!</h2>
    </div>
    <hr/>
    <demo13-son [count]="myNum">
      
    </demo13-son>
    <demo13-lianxi [btnName]="btnValue">
    </demo13-lianxi>
  `,
  styleUrls: ['./demo13.component.less']
})

export class Demo13ParentComponent implements OnInit{
  myNum:number = 100;
  btnValue:string = "登录";

  constructor(){
  }
  ngOnInit(){

  }

}
