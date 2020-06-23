import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DropzoneDirective } from './dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';

@NgModule({
  declarations: [UploadComponent, DropzoneDirective, UploadTaskComponent],
  imports: [CommonModule, SharedModule, UploadRoutingModule],
})
export class UploadModule {}
