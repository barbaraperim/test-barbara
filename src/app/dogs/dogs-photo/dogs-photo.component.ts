import { Component } from "@angular/core";
import { DogPhotoService } from "../services/dog-photo.service";
import { SUCCESS_CODE } from "../services/models/dog-photo.model";

@Component({
  selector: "app-dogs-photo",
  templateUrl: "./dogs-photo.component.html",
  styleUrl: "./dogs-photo.component.scss",
})
export class DogsPhotoComponent {
  dogPhotoSrc: string = "";
  dogPhotoError: boolean = false;
  dogPhotoLoading: boolean = true;
  loadingPath = "/assets/loading.gif";

  constructor(private dogsService: DogPhotoService) {}

  ngOnInit() {
    this.dogPhotoLoading = true;
    this.dogsService.getDogPhoto().subscribe(
      (data) => {
        if (data.status === SUCCESS_CODE) {
          this.dogPhotoSrc = data.message;
        } else {
          this.setError();
        }
      },
      () => {
        this.setError();
      },
      () => {
        this.dogPhotoLoading = false;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  private setError() {
    this.dogPhotoError = true;
    this.dogPhotoLoading = false;
  }
}
