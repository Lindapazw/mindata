import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberListCardComponent } from './member-list-card.component';

describe('MemberListCardComponent', () => {
  let component: MemberListCardComponent;
  let fixture: ComponentFixture<MemberListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
