# ng-vite-mono-hmr

This repository is a demo of a bug when using multiple angular applications that proxy to each other.

### To reproduce
1. Clone this repository.
2. `yarn install`.
3. `yarn start app-a` and `yarn start app-b` in two separate shells.
   - Alternatively, `yarn nx run-many -t serve` will start both apps in the same shell.
4. Navigate to http://localhost:4200/app-b/main.
5. Make a change to `apps/app-b/src/app/components/main/app-b-main.component.html`

### Expected
The page gets a hot update, which make the change to the component template reflect immediately without a full page reload.

### Actual
Nothing happens.
