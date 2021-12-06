# What's New in Angular

- [What's New in Angular](#whats-new-in-angular)
  - [Highlights](#highlights)
  - [Versions](#versions)
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
  - profiling applications
- WebPack 5 Opt-in
- Micro Frontend Capabilities
- [i18n and new message id format](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49)
- nullish coalescing operator (??)
- [content projection guide](https://v12.angular.io/guide/content-projection)
- ng build now defaults to production

### Version 11 (Nov 11, 2020)

- [Blog notes](https://blog.angular.io/version-11-of-angular-now-available-74721b7952f7)
- `$localize `Hello ${name}:name!`;`
-  new CLI output updates to make logs and reports easier to read
-  opt-in to webpack v5. Currently, you could experiment with [module federation](https://webpack.js.org/concepts/module-federation/).

### Version 10 (Jun 24, 2020)

- Warnings about CommonJS imports
- Optional Stricter Settings

### Version 9 (Feb 6, 2020)

- Version 9 moves all applications to use the Ivy compiler and runtime by default
- Improved build times, enabling AOT on by default
- Improved Internationalization

### Version 8 (May 28, 2019)

- Featuring Differential loading for all application code, 
- Dynamic imports for lazy routes, 
- Web workers

### Version 6 (May 4, 2018)

- multiple projects (monorepo)
- library projects (new type)