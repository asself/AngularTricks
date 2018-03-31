import {Injectable} from '@angular/core'

@Injectable()

export class LogService {
  isDev:boolean = false;
  constructor(){}
  showMsg(msg:any){
    if(this.isDev){
      console.log(msg)
    }
  }
}
