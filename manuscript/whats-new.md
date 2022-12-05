# What's New in Angular

## Wifi

matt.vaughn@buildmotion.com

- wifi: UberConf2022
- password: nfjs2022

## What's New

- [What's New in Angular](#whats-new-in-angular)
  - [Wifi](#wifi)
  - [What's New](#whats-new)
  - [Highlights](#highlights)
  - [Versions](#versions)
    - [Version 14, (June 2, 2022)](#version-14-june-2-2022)
    - [Version 13 (Nov 04, 2021)](#version-13-nov-04-2021)
    - [Version 12 (May 12, 2021)](#version-12-may-12-2021)
    - [Version 11 (Nov 11, 2020)](#version-11-nov-11-2020)
    - [Version 10 (Jun 24, 2020)](#version-10-jun-24-2020)
    - [Version 9 (Feb 6, 2020)](#version-9-feb-6-2020)
    - [Version 8 (May 28, 2019)](#version-8-may-28-2019)
    - [Version 6 (May 4, 2018)](#version-6-may-4-2018)

## Highlights

- Ivy (v13)
- Webpack 5 + [Module Federation](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ)
  - Webpack 5 Module Federation: [A game-changer in JavaScript architecture](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669)
- Monorepo
- Library Project Type

## Versions

### Version 14, (June 2, 2022)

- [Release Notes](https://blog.angular.io/angular-v14-is-now-available-391a6db736af)
  - Standalone Components on [Stackblitz](https://stackblitz.com/edit/angular-standalone?file=src%2Fmain.ts)
  - strict typing for the Angular Reactive Forms package

### Version 13 (Nov 04, 2021)

- View Engine is no longer available in Angular as of v13. 
- Angular Package Format v13
- Webpack 5 Package Exports
  - See: https://webpack.js.org/guides/package-exports/
- Ivy
  - A simplified `ViewContainerRef.createComponent` API allows for dynamic creation of components.
- Removing IE11 support allows Angular to leverage modern browser features such as CSS variables and web animations via native web APIs.
- [Inlining of Adobe Fonts](https://youtu.be/yOpy9UMQG-Y)

### Version 12 (May 12, 2021)

- [Release Notes](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49)
- [Angular Dev Tools](https://youtu.be/bavWOHZM6zE)
  - [profiling applications](https://angular.io/guide/devtools)
- [`--strict` is default](https://angular.io/guide/strict-mode)
- WebPack 5 Opt-in
- Micro Frontend Capabilities
- [Nullish Coalescing](https://dev.to/this-is-angular/nullish-coalescing-support-in-angular-template-48h6): `{{user ?? 'N/A'}}`
- [i18n and new message id format](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49)
- [content projection guide](https://v12.angular.io/guide/content-projection)
- ng build now defaults to production
- [Min/Max Form Validators](https://angular.io/api/forms/Validators)
- [HttpInterceptors: Passing Context](https://netbasal.com/new-in-angular-v12-passing-context-to-http-interceptors-308a1ca2f3dd)
  - [Sample](https://itnext.io/bypass-angular-interceptors-with-request-metadata-cf28061cda69)
  - [Passing Meta Data to Interceptors](https://angular.io/guide/http#passing-metadata-to-interceptors)
- [APP_INITIALIZER](https://angular.io/api/core/APP_INITIALIZER)
  - [Usage notes from Angular.io](https://angular.io/api/core/APP_INITIALIZER#usage-notes)
  - [How to use APP_INITIALIZER](https://www.tektutorialshub.com/angular/angular-how-to-use-app-initializer/)

### Version 11 (Nov 11, 2020)

- [Blog notes](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7)
- `$localize `Hello ${name}:name!`;`
-  new CLI output updates to make logs and reports easier to read
-  opt-in to webpack v5. Currently, you could experiment with [module federation](https://webpack.js.org/concepts/module-federation/).
-  [Hot Module Replacement](https://javascript.plainenglish.io/state-of-hmr-in-angular-b3c19b4ebc54#:~:text=Angular%2011%20made%20it%20easy,the%20page%20for%20each%20save.): `ng serve--hmr`

### Version 10 (Jun 24, 2020)

- Warnings about CommonJS imports
- Optional Stricter Settings
- [Language Service](https://angular.io/guide/language-service)
- [bundle budgets](https://angular.io/guide/build#configuring-size-budgets)
- [Generic ModuleWithProviders<T>](https://angular.io/api/core/ModuleWithProviders)
  - [more about migrating|using `ModuleWithProviders`](https://angular.io/guide/migration-module-with-providers)

### Version 9 (Feb 6, 2020)

- Version 9 moves all applications to use the Ivy compiler and runtime by default
- Improved build times, enabling AOT on by default
- Improved Internationalization
- Type checking
  - full template | strict template

### Version 8 (May 28, 2019)

- Featuring Differential loading for all application code, 
- Dynamic imports for lazy routes
  - [lazy-loading](https://angular.io/guide/lazy-loading-ngmodules)
  - [Stackblitz Example](https://stackblitz.com/run?file=src%2Fapp%2Fapp-routing.module.ts)
- Web workers
- builder|workspace APIs (serve, build, lint, test, e2e)

### Version 6 (May 4, 2018)

- [multiple projects (monorepo)](https://angular.io/guide/file-structure)
  - [workspace](https://angular.io/guide/glossary#workspace)
  - [projects](https://angular.io/guide/glossary#workspace)
- [library projects (new type)](https://angular.io/guide/glossary#workspace)
  - providers
- [schematics](https://angular.io/guide/glossary#workspace)
- [i18n/i[nternationalizatio]n](https://angular.io/guide/i18n-overview)
- tree shaking