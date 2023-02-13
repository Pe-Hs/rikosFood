import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliRoutingModule } from './cli-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CliRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class CliModule { }
