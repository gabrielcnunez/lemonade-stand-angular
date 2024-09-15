import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() name: string = ""
  @Input() amount: number = 0
  @Input() max: number = 10
  @Input() unit: string = ""

}
