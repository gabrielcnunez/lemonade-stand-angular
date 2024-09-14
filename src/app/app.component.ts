import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LemonadeComponent } from "./lemonade/lemonade.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LemonadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lemonadestand';
}
