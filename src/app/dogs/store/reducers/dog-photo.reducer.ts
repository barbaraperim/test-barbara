import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { loadDogPhoto, loadDogPhotoSuccess } from "../actions/dog-photo.action";
import { DogPhoto } from "../../services/models/dog-photo.model";

export const dogPhotoFeatureKey = "dogPhotoState";

export interface DogPhotoState {
  dogPhoto: DogPhoto;
  loading: boolean;
}

export const initialState: DogPhotoState = {
  dogPhoto: {
    message: "",
    status: "",
  },
  loading: false,
};

export const dogPhotoReducer = createReducer(
  initialState,
  on(loadDogPhoto, (state) => ({ ...state, loading: true })),
  on(loadDogPhotoSuccess, (state, dogPhoto) => ({
    ...state,
    loading: false,
    dogPhoto: dogPhoto.dogPhoto,
  }))
);

export const selectFeature =
  createFeatureSelector<DogPhotoState>(dogPhotoFeatureKey);

export const selectFeatureDogPhoto = createSelector(
  selectFeature,
  (state: DogPhotoState) => state
);

export const selectDogPhoto = createSelector(
  selectFeature,
  (state: DogPhotoState) => state.dogPhoto
);

export const selectDogPhotoLoading = createSelector(
  selectFeature,
  (state: DogPhotoState) => state.loading
);
