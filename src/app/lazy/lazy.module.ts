import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazypageComponent } from './lazypage/lazypage.component';
import { lazyRouting } from './lazy.routes';

@NgModule({
  imports: [
    CommonModule,
    lazyRouting
  ],
  declarations: [LazyComponent, LazypageComponent]
})
export class LazyModule { }
