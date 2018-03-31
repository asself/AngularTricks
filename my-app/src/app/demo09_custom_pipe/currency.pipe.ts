// 过滤器(管道)本质带有参数，带有返回值的方法

import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'currency'})

export class CurrencyPipe implements PipeTransform{
    transform(value: any, ...args:any[]) :any{
        console.log(value);
        console.log(args)
        if (args[0]){
          return args[0]+value
        }
        return '$'+value;
    }
}
