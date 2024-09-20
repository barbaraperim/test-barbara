import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DogsPhotoComponent } from "./dogs-photo/dogs-photo.component";

@NgModule({
  declarations: [DogsPhotoComponent],
  imports: [CommonModule],
  exports: [DogsPhotoComponent],
})
export class DogsModule {}
