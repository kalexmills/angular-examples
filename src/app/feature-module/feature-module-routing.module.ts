import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeatureModuleComponent} from './feature-module/feature-module.component';

// Feature module defines its own routes.
const routes = [
  { path: 'feature-module', component: FeatureModuleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureModuleRoutingModule {}
