import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-lemonade',
  standalone: true,
  imports: [ProductComponent, CardComponent],
  templateUrl: './lemonade.component.html',
  styleUrl: './lemonade.component.css'
})
export class LemonadeComponent {

}
