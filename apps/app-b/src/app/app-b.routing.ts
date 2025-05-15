import { RouterModule } from '@angular/router';

import { AppBMainComponent } from './components/main/app-b-main.component';

export const AppBRouting = RouterModule.forRoot([
  {
    path: 'main',
    component: AppBMainComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  }
]);
