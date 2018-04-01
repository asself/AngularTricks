import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//为双向数据绑定做准备
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
//找到所声明的组件 Demo01Component
import { Demo01Component } from './demo01/demo01.component';
//找到所声明的组件 Demo02Component
import {Demo02Component} from './demo02_lianxi/demo02.component'
import {Demo03Component} from './demo03_directive/demo03.component'
//找到所声明的组件Demo04Component
import {Demo04Component} from './demo04_lianxi/demo04.component'
//找到所声明的组件Demo05Component
import {Demo05Component} from './demo05_bind/demo05.component'
import {TestDirective} from './demo06_custom_direcitve/test.directive'
import {Demo06Component} from './demo06_custom_direcitve/demo06.component'
import {Demo07Component} from './demo07_lianxi/demo07.component'
import {ChangeBgColorDirective} from './demo07_lianxi/change-bgcolor.directive'
import {CurrencyPipe} from './demo09_custom_pipe/currency.pipe'
import {Demo09Component} from './demo09_custom_pipe/demo09.component'
import {Demo11Component} from './demo11_service/demo11.component'
import {LogService} from './demo11_service/log.service'
import {Demo13ParentComponent} from './demo13_p_s/demo13_parent.component'
import {Demo13SonComponent} from './demo13_p_s/demo13_son.component'
import {Demo13LianxiComponent} from  './demo13_p_s/demo13_lianxi.compoenent'
//在模块中声明组件类
@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    Demo05Component,
    TestDirective,
    Demo06Component,
    Demo07Component,
    ChangeBgColorDirective,
    CurrencyPipe,
    Demo09Component,
    Demo11Component,
    Demo13ParentComponent,
    Demo13SonComponent,
    Demo13LianxiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
