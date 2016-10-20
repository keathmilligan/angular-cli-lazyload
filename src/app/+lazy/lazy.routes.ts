import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazypageComponent } from './lazypage/lazypage.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: 'lazypage',
        component: LazypageComponent
      }
    ]
  }
];
export const lazyRouting: ModuleWithProviders = RouterModule.forChild(lazyRoutes);
