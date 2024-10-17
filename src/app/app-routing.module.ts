import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '',
    redirectTo: 'componentes',
    pathMatch: 'full'
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'ion-alert',
    loadChildren: () => import('./ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
    path: 'ion-badge',
    loadChildren: () => import('./ion-badge/ion-badge.module').then( m => m.IonBadgePageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-cont',
    loadChildren: () => import('./ion-cont/ion-cont.module').then( m => m.IonContPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-fab',
    loadChildren: () => import('./ion-fab/ion-fab.module').then( m => m.IonFabPageModule)
  },
  {
    path: 'ion-icon',
    loadChildren: () => import('./ion-icon/ion-icon.module').then( m => m.IonIconPageModule)
  },
  {
    path: 'ion-input',
    loadChildren: () => import('./ion-input/ion-input.module').then( m => m.IonInputPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'ion-infine-scroll',
    loadChildren: () => import('./ion-infine-scroll/ion-infine-scroll.module').then( m => m.IonInfineScrollPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'ion-list',
    loadChildren: () => import('./ion-list/ion-list.module').then( m => m.IonListPageModule)
  },
  {
    path: 'ion-menu',
    loadChildren: () => import('./ion-menu/ion-menu.module').then( m => m.IonMenuPageModule)
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'ion-nav',
    loadChildren: () => import('./ion-nav/ion-nav.module').then( m => m.IonNavPageModule)
  },
  {
    path: 'ion-popover',
    loadChildren: () => import('./ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },
  {
    path: 'ion-progress-bar',
    loadChildren: () => import('./ion-progress-bar/ion-progress-bar.module').then( m => m.IonProgressBarPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-select',
    loadChildren: () => import('./ion-select/ion-select.module').then( m => m.IonSelectPageModule)
  },
  {
    path: 'ion-tabs',
    loadChildren: () => import('./ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },
  {
    path: 'ion-toast',
    loadChildren: () => import('./ion-toast/ion-toast.module').then( m => m.IonToastPageModule)
  },
  {
    path: 'ion-toggle',
    loadChildren: () => import('./ion-toggle/ion-toggle.module').then( m => m.IonTogglePageModule)
  },
  {
    path: 'ion-toolbar',
    loadChildren: () => import('./ion-toolbar/ion-toolbar.module').then( m => m.IonToolbarPageModule)
  },
=======
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
>>>>>>> 76b940e (Initial commit)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
