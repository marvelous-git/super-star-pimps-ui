import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserAccount } from './user-account.model';
import * as UserAccountActions from './user-account.actions';

export const userAccountsFeatureKey = 'userAccounts';

export interface State extends EntityState<UserAccount> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserAccount> = createEntityAdapter<UserAccount>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(UserAccountActions.addUserAccount,
    (state, action) => adapter.addOne(action.userAccount, state)
  ),
  on(UserAccountActions.upsertUserAccount,
    (state, action) => adapter.upsertOne(action.userAccount, state)
  ),
  on(UserAccountActions.addUserAccounts,
    (state, action) => adapter.addMany(action.userAccounts, state)
  ),
  on(UserAccountActions.upsertUserAccounts,
    (state, action) => adapter.upsertMany(action.userAccounts, state)
  ),
  on(UserAccountActions.updateUserAccount,
    (state, action) => adapter.updateOne(action.userAccount, state)
  ),
  on(UserAccountActions.updateUserAccounts,
    (state, action) => adapter.updateMany(action.userAccounts, state)
  ),
  on(UserAccountActions.deleteUserAccount,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UserAccountActions.deleteUserAccounts,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UserAccountActions.loadUserAccounts,
    (state, action) => adapter.setAll(action.userAccounts, state)
  ),
  on(UserAccountActions.clearUserAccounts,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
