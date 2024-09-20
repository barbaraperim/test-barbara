import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DogsModule } from "./dogs/dogs.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, DogsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "test-barbara";
}
