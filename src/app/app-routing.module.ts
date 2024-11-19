import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',  
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./qr-scan/qr-scan.module').then( m => m.QrScanPageModule)
  },
  {
    path: 'unlocking',
    loadChildren: () => import('./unlocking/unlocking.module').then( m => m.UnlockingPageModule)
  },
  {
    path: 'connected',
    loadChildren: () => import('./connected/connected.module').then( m => m.ConnectedPageModule)
  },
  {
    path: 'ride-started',
    loadChildren: () => import('./ride-started/ride-started.module').then( m => m.RideStartedPageModule)
  },
  {
    path: 'ride-ended',
    loadChildren: () => import('./ride-ended/ride-ended.module').then( m => m.RideEndedPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'ride-history',
    loadChildren: () => import('./ride-history/ride-history.module').then( m => m.RideHistoryPageModule)
  },
  {
    path: 'ride-info',
    loadChildren: () => import('./ride-info/ride-info.module').then( m => m.RideInfoPageModule)
  },
  {
    path: 'refer-and-earn',
    loadChildren: () => import('./refer-and-earn/refer-and-earn.module').then( m => m.ReferAndEarnPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'security-fund',
    loadChildren: () => import('./security-fund/security-fund.module').then( m => m.SecurityFundPageModule)
  },   {
    path: 'theme-language-selction',
    loadChildren: () => import('./theme-language-selction/theme-language-selction.module').then( m => m.ThemeLanguageSelctionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
