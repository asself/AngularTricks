import { Component, OnInit, Input} from "@angular/core"

@Component({
  selector: "demo13-lianxi",
  template:`
    <button class="btn btn-info" (click)="btnClick()">
      {{btnName}}
    </button>
  `
})

export class Demo13LianxiComponent implements OnInit {
  @Input() btnName:any = null;
  btnClick(){
    alert(this.btnName)
  }
  constructor(){

  }
  ngOnInit(){
    console.log("父组件传来的值为",this.btnName)
  }
}
