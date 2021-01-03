import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountDeleteComponent } from './user-account-delete.component';

describe('UserAccountDeleteComponent', () => {
  let component: UserAccountDeleteComponent;
  let fixture: ComponentFixture<UserAccountDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
