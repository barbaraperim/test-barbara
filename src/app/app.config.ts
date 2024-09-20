import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { provideState, provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { DogPhotoEffects } from "./dogs/store/effects/dog-photo.effect";
import {
  dogPhotoFeatureKey,
  dogPhotoReducer,
} from "./dogs/store/reducers/dog-photo.reducer";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(),
    provideState({ name: dogPhotoFeatureKey, reducer: dogPhotoReducer }),
    provideEffects(DogPhotoEffects),
    provideStoreDevtools({ maxAge: 95, connectInZone: true }),
  ],
};
