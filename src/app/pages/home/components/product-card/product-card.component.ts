import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { ChipComponent } from '../../../../components/chip/chip.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ChipComponent, NgFor, ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  chipsData = [
    { icon: 'fa-solid fa-leaf', bgColor: '$green' },
    { icon: 'fa-solid fa-fire', bgColor: '#f8593b' },
  ];
}
