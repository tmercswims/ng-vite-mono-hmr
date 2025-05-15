import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppBComponent } from './app-b.component';
import { AppBRouting } from './app-b.routing';
import { AppBMainComponent } from './components/main/app-b-main.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppBRouting],
  declarations: [AppBComponent, AppBMainComponent],
  bootstrap: [AppBComponent],
})
export class AppBModule {}
