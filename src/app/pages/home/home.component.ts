import { Component } from '@angular/core';
import { ActionCardComponent } from './components/action-card/action-card.component';
import { MemberListCardComponent } from './components/member-list-card/member-list-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ActionCardComponent,
    MemberListCardComponent,
    ProductCardComponent,
    ProfileCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
