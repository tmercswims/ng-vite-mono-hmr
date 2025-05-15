import { RouterModule } from '@angular/router';

import { AppAMainComponent } from './components/main/app-a-main.component';

export const AppARouting = RouterModule.forRoot([
  {
    path: 'main',
    component: AppAMainComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
  }
]);
