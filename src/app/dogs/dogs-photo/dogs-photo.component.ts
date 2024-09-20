import { Component } from "@angular/core";
import { DogPhotoService } from "../services/dog-photo.service";
import { DogPhoto, SUCCESS_CODE } from "../services/models/dog-photo.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { loadDogPhoto } from "../store/actions/dog-photo.action";
import {
  selectDogPhoto,
  selectDogPhotoLoading,
} from "../store/reducers/dog-photo.reducer";
@Component({
  selector: "app-dogs-photo",
  templateUrl: "./dogs-photo.component.html",
  styleUrl: "./dogs-photo.component.scss",
})
export class DogsPhotoComponent {
  readonly SUCCESS_CODE = SUCCESS_CODE;

  firstDogPhotoSrc: string = "";
  firstDogPhotoError: boolean = false;
  firstDogPhotoLoading: boolean = true;

  $dogPhoto: Observable<DogPhoto>;

  readonly signalDogPhoto = this.store.selectSignal(selectDogPhoto);
  readonly signalDogPhotoLoading = this.store.selectSignal(
    selectDogPhotoLoading
  );

  constructor(private dogsService: DogPhotoService, private store: Store) {
    this.$dogPhoto = this.dogsService.getDogPhoto();
  }

  ngOnInit() {
    this.store.dispatch(loadDogPhoto());

    this.firstDogPhotoLoading = true;
    this.$dogPhoto.subscribe({
      next: (data) => {
        if (data.status === SUCCESS_CODE) {
          this.firstDogPhotoSrc = data.message;
        } else {
          this.setError();
        }
      },
      error: () => {
        this.setError();
      },
      complete: () => {
        this.firstDogPhotoLoading = false;
      },
    });
  }

  reloadPage() {
    window.location.reload();
  }

  private setError() {
    this.firstDogPhotoError = true;
    this.firstDogPhotoLoading = false;
  }
}
