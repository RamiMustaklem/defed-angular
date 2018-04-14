/**
 * This file to import all shared components for our app to make sure no one imports any not needed components
 * This will help us tell other programmers these components can be used outside of the project
 *
 * Example:
 *  export { ButtonModule } from ‘./buttons/buttons.module.ts’;
 *  This means we are exporting the link button to use it on the whole project
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarsModule } from "./toolbars/toolbars.module";
import { NavbarsModule } from "./navbars/navbars.module";

@NgModule({
  imports: [
    CommonModule,
    ToolbarsModule,
    NavbarsModule
  ],
  exports: [
    ToolbarsModule,
    NavbarsModule
  ],
  declarations: []
})
export class ComponentsModule { }
