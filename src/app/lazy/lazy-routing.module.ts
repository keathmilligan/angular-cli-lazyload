import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyPageComponent } from './lazy-page/lazy-page.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: 'lazypage',
        component: LazyPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
