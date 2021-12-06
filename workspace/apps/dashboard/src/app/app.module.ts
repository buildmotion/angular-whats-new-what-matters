import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'accounts',
          loadChildren: () =>
            import('accounts/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'admin',
          loadChildren: () =>
            import('admin/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'billing',
          loadChildren: () =>
            import('billing/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'products',
          loadChildren: () =>
            import('products/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'reports',
          loadChildren: () =>
            import('reports/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'security',
          loadChildren: () =>
            import('security/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
