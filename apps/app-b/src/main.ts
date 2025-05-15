import { platformBrowser } from '@angular/platform-browser';

import { AppBModule } from './app/app-b.module';

platformBrowser()
  .bootstrapModule(AppBModule)
  .catch((err) => console.error(err));
