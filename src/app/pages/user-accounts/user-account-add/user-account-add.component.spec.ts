import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountAddComponent } from './user-account-add.component';

describe('UserAccountAddComponent', () => {
  let component: UserAccountAddComponent;
  let fixture: ComponentFixture<UserAccountAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
