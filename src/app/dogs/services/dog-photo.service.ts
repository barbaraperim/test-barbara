import { Injectable } from "@angular/core";
import { DogPhoto } from "./models/dog-photo.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DogPhotoService {
  constructor(private http: HttpClient) {}

  getDogPhoto(): Observable<DogPhoto> {
    return this.http.get<DogPhoto>("https://dog.ceo/api/breeds/image/random");
  }
}
