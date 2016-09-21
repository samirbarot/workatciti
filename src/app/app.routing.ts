import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentOneComponent } from './component-one/component-one.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/component-one'},
    { path: 'component-one', component: ComponentOneComponent }
 ];

export const appRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

