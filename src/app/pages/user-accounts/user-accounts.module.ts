import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountsListComponent } from './user-accounts-list/user-accounts-list.component';
import { UserAccountEditComponent } from './user-account-edit/user-account-edit.component';
import { UserAccountDeleteComponent } from './user-account-delete/user-account-delete.component';
import { UserAccountAddComponent } from './user-account-add/user-account-add.component';
import { StoreModule } from '@ngrx/store';
import * as fromUserAccount from './+state/user-account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserAccountEffects } from './+state/user-account.effects';

@NgModule({
  declarations: [UserAccountsListComponent, UserAccountEditComponent, UserAccountDeleteComponent, UserAccountAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUserAccount.userAccountsFeatureKey, fromUserAccount.reducer),
    EffectsModule.forFeature([UserAccountEffects]),
  ]
})
export class UserAccountsModule { }
