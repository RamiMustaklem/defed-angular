/**
 * This file to import the routed pages for this application, any folders created here is a page or we can name it
 * as module for this project
 *
 * Example:
 *  export { AuthModule } from ‘./auth’;
 *  This means you are exporting the auth page or module for using inside routes
 *  Note: some modules can have its own routes but still need to import to access it from main app
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PagesModule { }
