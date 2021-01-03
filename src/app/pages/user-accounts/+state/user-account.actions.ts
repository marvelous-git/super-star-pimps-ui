import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { UserAccount } from './user-account.model';

export const loadUserAccounts = createAction(
  '[UserAccount/API] Load UserAccounts', 
  props<{ userAccounts: UserAccount[] }>()
);

export const addUserAccount = createAction(
  '[UserAccount/API] Add UserAccount',
  props<{ userAccount: UserAccount }>()
);

export const upsertUserAccount = createAction(
  '[UserAccount/API] Upsert UserAccount',
  props<{ userAccount: UserAccount }>()
);

export const addUserAccounts = createAction(
  '[UserAccount/API] Add UserAccounts',
  props<{ userAccounts: UserAccount[] }>()
);

export const upsertUserAccounts = createAction(
  '[UserAccount/API] Upsert UserAccounts',
  props<{ userAccounts: UserAccount[] }>()
);

export const updateUserAccount = createAction(
  '[UserAccount/API] Update UserAccount',
  props<{ userAccount: Update<UserAccount> }>()
);

export const updateUserAccounts = createAction(
  '[UserAccount/API] Update UserAccounts',
  props<{ userAccounts: Update<UserAccount>[] }>()
);

export const deleteUserAccount = createAction(
  '[UserAccount/API] Delete UserAccount',
  props<{ id: string }>()
);

export const deleteUserAccounts = createAction(
  '[UserAccount/API] Delete UserAccounts',
  props<{ ids: string[] }>()
);

export const clearUserAccounts = createAction(
  '[UserAccount/API] Clear UserAccounts'
);
