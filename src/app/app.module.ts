import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {TreeTableModule} from 'primeng/treetable';
import {TreeNode} from 'primeng/api';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    TableModule,
    TreeTableModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
