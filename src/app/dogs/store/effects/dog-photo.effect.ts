import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { loadDogPhoto, loadDogPhotoSuccess } from "../actions/dog-photo.action";
import { DogPhotoService } from "../../services/dog-photo.service";

@Injectable()
export class DogPhotoEffects {
  constructor(
    private dogPhotoService: DogPhotoService,
    private actions$: Actions
  ) {}

  loadDogPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDogPhoto),
      switchMap(() =>
        this.dogPhotoService.getDogPhoto().pipe(
          map((dogPhoto) => loadDogPhotoSuccess({ dogPhoto })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
