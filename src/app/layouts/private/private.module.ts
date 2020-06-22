import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, SharedModule, PrivateRoutingModule],
})
export class PrivateModule {}
