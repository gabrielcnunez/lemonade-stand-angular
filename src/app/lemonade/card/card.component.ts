import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  clicked() {
    console.log('Clicked!')
  }
}
