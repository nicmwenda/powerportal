import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [CommonModule, SharedModule, UploadRoutingModule],
})
export class UploadModule {}
