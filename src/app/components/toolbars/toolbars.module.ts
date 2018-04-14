import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { DEFEDToolbarComponent } from "./defed-toolbar.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    DEFEDToolbarComponent
  ],
  declarations: [DEFEDToolbarComponent]
})
export class ToolbarsModule { }
