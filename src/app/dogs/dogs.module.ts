import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DogsPhotoComponent } from "./dogs-photo/dogs-photo.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [DogsPhotoComponent],
  imports: [CommonModule, SharedModule],
  exports: [DogsPhotoComponent],
})
export class DogsModule {}
