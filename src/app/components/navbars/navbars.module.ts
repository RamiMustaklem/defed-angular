import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefedNavbarComponent } from './defed-navbar/defed-navbar.component';
import { MatIconModule, MatListModule, MatSidenavModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    DefedNavbarComponent
  ],
  declarations: [DefedNavbarComponent]
})
export class NavbarsModule { }
