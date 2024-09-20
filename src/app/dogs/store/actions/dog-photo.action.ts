import { createAction, props } from "@ngrx/store";
import { DogPhoto } from "../../services/models/dog-photo.model";

export const loadDogPhoto = createAction("[Dog Photo] Load");
export const loadDogPhotoSuccess = createAction(
  "[Dog Photo] Load Success",
  props<{ dogPhoto: DogPhoto }>()
);
