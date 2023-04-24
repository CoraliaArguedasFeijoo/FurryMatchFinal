import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { PetComponent } from './list/pet.component';
import { PetDetailComponent } from './detail/pet-detail.component';
import { PetUpdateComponent } from './update/pet-update.component';
import { PetDeleteDialogComponent } from './delete/pet-delete-dialog.component';
import { PetRoutingModule } from './route/pet-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CloudinaryModule } from '@cloudinary/ng';
import { CommonModule } from '@angular/common';
import { GalleryModule } from '../../gallery/gallery.module';
import { SearchMatchComponent } from './search-match/search-match.component';

@NgModule({
  imports: [SharedModule, PetRoutingModule, NgxDropzoneModule, CloudinaryModule, CommonModule, GalleryModule],
  declarations: [PetComponent, PetDetailComponent, PetUpdateComponent, PetDeleteDialogComponent, SearchMatchComponent],
  exports: [PetDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PetModule {}
