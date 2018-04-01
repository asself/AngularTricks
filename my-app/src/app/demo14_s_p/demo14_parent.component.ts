import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'demo14-parent',
  template:` 
    <div>
      <h1 class="h1 text-dark">这是demo14父组件</h1>
      <demo14-son (myEvent)="rcvMsg($event)"></demo14-son>
    </div>
  `,
  styles:[]
})
export class Demo14ParentComponent implements OnInit{
  constructor(){
  }
  ngOnInit(){}
  rcvMsg(msg:any){
    console.log("接收到来自子组件的信息是",msg)
  }

}
