# Contract Hire

Contract Hire front-end system with Angular 5.x
## After project clone if you have any error run the following command
```bash
npm uninstall -g angular-cli && npm uninstall --save-dev angular-cli && npm uninstall -g @angular/cli && npm cache clean && npm install -g @angular/cli@latest && rm -rf node_modules dist && npm install --save-dev @angular/cli@latest && npm install
```

## Before code push do the following checks 
```bash
npm run tsformat
ng lint
npm run scsslint
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod --environment=prod --aot` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--dev` flag for a dev build.

## Create a module 

~~~bash
ng g m modules/Dashboard --routing
~~~

## Create a Page inside a module

Here note that for the folder we are specifying folder names in all lower case rather than specifying capitalized module name. Only the final page/component name is capitalized. 

~~~bash
ng g c modules/dashboard/pages/dashboard
~~~

## Create a component inside a module

~~~bash
ng g c modules/dashboard/components/Info
~~~

## Create a Service
~~~bash
ng g service modules/shared/services/UserService
~~~

