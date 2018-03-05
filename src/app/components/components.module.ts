/**
 * This file to import all shred components for our app to make sure no one import not needed components
 * This will help us to tell other programmers these components can be used outside on the project
 *
 * Example:
 *  export { ButtonModule } from ‘./buttons/buttons.module.ts’;
 *  This means we are exporting the link button to use it on the whole project
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ComponentsModule { }
