import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { LazyPageComponent } from './lazy-page/lazy-page.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponent, LazyPageComponent]
})
export class LazyModule { }
