import { platformBrowser } from '@angular/platform-browser';

import { AppAModule } from './app/app-a.module';

platformBrowser()
  .bootstrapModule(AppAModule)
  .catch((err) => console.error(err));
