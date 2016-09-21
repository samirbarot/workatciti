import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentTwoComponent } from './component-two.component';

const routes: Routes = [
  { path: 'component-two', component: ComponentTwoComponent },
];

export const componentTwoRouting: ModuleWithProviders = RouterModule.forRoot(routes);
