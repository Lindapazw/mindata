import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';

@Component({
  selector: 'app-member-list-card',
  standalone: true,
  imports: [UserSummaryComponent, NgFor],
  templateUrl: './member-list-card.component.html',
  styleUrl: './member-list-card.component.scss',
})
export class MemberListCardComponent {
  members: User[] = [
    {
      id: 1,
      name: 'Wade Warren',
      occupation: 'Dog Trainer',
      image: 'assets/images/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Robert Fox',
      occupation: 'President of Sales',
      image: 'assets/images/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Jane Cooper',
      occupation: 'Nursing Assistant',
      image: 'assets/images/avatar-3.jpg',
    },
    {
      id: 4,
      name: 'Frank Esteban',
      occupation: 'Software Tester',
      image: 'assets/images/avatar-4.jpg',
    },
    {
      id: 5,
      name: 'Dianne Russell',
      occupation: 'Web Designer',
      image: 'assets/images/avatar-5.jpg',
    },
  ];
}
