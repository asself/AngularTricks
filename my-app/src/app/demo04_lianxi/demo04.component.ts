
import {Component} from '@angular/core';

@Component({
  selector:'demo04',
  templateUrl:'./demo04.component.html'
})

export class Demo04Component{
   student:Array<Object> = [
     {name:'小明01',score:'90',sex:'male'},
     {name:'小明02',score:'80',sex:'female'},
     {name:'小明03',score:'70',sex:'male'},
     {name:'小明04',score:'60',sex:'male'},
     {name:'小明05',score:'50',sex:'male'},
   ]
}

