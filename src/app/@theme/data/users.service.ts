import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from './users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    marvelous: { name: 'Marvelous Mashamba', picture: 'assets/avatars/user.svg' },
    thelma: { name: 'Thelma Zindoga', picture: 'assets/avatars/user.svg' },
    alice: { name: 'Alice Matumbi', picture: 'assets/avatars/user.svg' },

  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.marvelous, type: this.types.mobile },
    { user: this.users.thelma, type: this.types.home },
    { user: this.users.alice, type: this.types.mobile },

  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.marvelous, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.thelma, type: this.types.home, time: this.time.setHours(17, 45)},
    { user: this.users.alice, type: this.types.mobile, time: this.time.setHours(5, 29)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
