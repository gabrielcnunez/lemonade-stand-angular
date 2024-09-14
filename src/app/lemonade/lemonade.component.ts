import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-lemonade',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './lemonade.component.html',
  styleUrl: './lemonade.component.css'
})
export class LemonadeComponent {

}
