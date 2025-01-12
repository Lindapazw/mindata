import { Component } from '@angular/core';
import { AvatarComponent } from '../../../../components/avatar/avatar.component';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-member-list-card',
  standalone: true,
  imports: [AvatarComponent, ButtonComponent],
  templateUrl: './member-list-card.component.html',
  styleUrl: './member-list-card.component.scss',
})
export class MemberListCardComponent {}
