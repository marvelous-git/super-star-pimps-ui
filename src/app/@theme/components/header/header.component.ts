import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../data/users';
import { LayoutService } from '../../utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import {
  LAYOUT_CONFIGURATION_TOKEN,
  LayoutConfiguration
} from '../../tokens';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = this.configuration.nebular.userPictureOnly;
  user: any;
  isClosed = true;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = this.configuration.nebular.userMenus;

  constructor(@Inject(LAYOUT_CONFIGURATION_TOKEN)
  public configuration: LayoutConfiguration,
              private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.marvelous);

      const { xl } = this.breakpointService.getBreakpointsMap();
      this.themeService.onMediaQueryChange()
        .pipe(
          map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
          takeUntil(this.destroy$),
        )
        .subscribe((isLessThanXl: boolean) => {
          this.userPictureOnly = isLessThanXl;
          this.isClosed = !isLessThanXl;
        });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    this.isClosed =!this.isClosed

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
