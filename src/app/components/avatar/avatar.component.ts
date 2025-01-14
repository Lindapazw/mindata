import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() image: string | undefined; // Imagen a mostrar
  @Input() size: 'small' | 'large' = 'small'; // Tamaño predeterminado (small)
  defaultImage: string = 'ruta/a/default.jpg'; // Imagen por defecto
}
