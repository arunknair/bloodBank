import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import {SideBarModule} from '../side-bar/side-bar.module';
import {TitleBarModule} from '../title-bar/title-bar.module';
import {TimelineModule} from '../timeline/timeline.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    SideBarModule,
    TimelineModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
