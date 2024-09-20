import { Injectable } from "@angular/core";
import { Dog } from "./models/dog.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DogsService {
  constructor(private http: HttpClient) {}

  getDog(): Observable<Dog> {
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }
}
