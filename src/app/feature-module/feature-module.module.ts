import {FeatureModuleComponent} from './feature-module/feature-module.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FeatureModuleRoutingModule} from './feature-module-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ],
  declarations: [
    FeatureModuleComponent
  ]
})
export class FeatureModuleModule {}
