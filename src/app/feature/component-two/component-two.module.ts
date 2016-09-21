import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentTwoComponent }   from './component-two.component';
import { componentTwoRouting } from './component-two.routing';

@NgModule({
    imports: [ CommonModule, componentTwoRouting ],
    exports: [ ],
    declarations: [ComponentTwoComponent],
    providers: [],
})
export class ComponentTwoModule { }
