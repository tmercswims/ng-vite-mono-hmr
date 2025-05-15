import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppAComponent } from './app-a.component';
import { AppARouting } from './app-a.routing';
import { AppAMainComponent } from './components/main/app-a-main.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppARouting],
  declarations: [AppAComponent, AppAMainComponent],
  bootstrap: [AppAComponent],
})
export class AppAModule {}
