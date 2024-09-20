import { Component } from "@angular/core";
import { DogsService } from "../services/dogs.service";

@Component({
  selector: "app-dogs-photo",
  templateUrl: "./dogs-photo.component.html",
  styleUrl: "./dogs-photo.component.css",
})
export class DogsPhotoComponent {
  dogPhotoSrc: string = "";

  constructor(private dogsService: DogsService) {}

  ngOnInit() {
    this.dogsService.getDog().subscribe((data) => {
      this.dogPhotoSrc = data.message;
    });
  }
}
