import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { DefedToolbarComponent } from "./defed-toolbar/defed-toolbar.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    DefedToolbarComponent
  ],
  declarations: [DefedToolbarComponent]
})
export class ToolbarsModule { }
