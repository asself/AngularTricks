import { Component, OnInit, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'demo14-son',
  template:`
  <h2 class="h2 text-info">
    这是demo14子组件
  </h2>
  <button (click)="sendToFather()">sendTo</button>  
  `
})
export class Demo14ParentSonComponent implements OnInit{
  @Output() myEvent = new EventEmitter();
  count:number = 123;
  constructor(){

  }
  ngOnInit(){

  }
  private sendToFather(){
    this.myEvent.emit(this.count)
  }

}
