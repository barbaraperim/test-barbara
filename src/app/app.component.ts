import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DogsModule } from "./dogs/dogs.module";
import { SharedModule } from "./shared/shared.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SharedModule, DogsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "test-barbara";
}
