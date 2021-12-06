# Angular :: What's New and What Matters in Angular Today

- [Angular :: What's New and What Matters in Angular Today](#angular--whats-new-and-what-matters-in-angular-today)
  - [Highlights](#highlights)
  - [Versions](#versions)
    - [Version 13 (Nov 04, 2021)](#version-13-nov-04-2021)
    - [Version 12 (May 12, 2021)](#version-12-may-12-2021)
    - [Version 11 (Nov 11, 2020)](#version-11-nov-11-2020)
    - [Version 10 (Jun 24, 2020)](#version-10-jun-24-2020)
    - [Version 9 (Feb 6, 2020)](#version-9-feb-6-2020)
    - [Version 8 (May 28, 2019)](#version-8-may-28-2019)
  - [Upgrades - How](#upgrades---how)
  - [What Matters Today](#what-matters-today)
  - [Resources](#resources)

## Highlights

- Ivy (v13)
- Webpack 5 + [Module Federation](https://www.youtube.com/playlist?list=PLWSiF9YHHK-DqsFHGYbeAMwbd9xcZbEWJ)
  - Webpack 5 Module Federation: [A game-changer in JavaScript architecture](https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669)

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

## Upgrades - How

> See: https://update.angular.io/

- [ ] Upgrade incrementally
- [ ] Use the CLI to create: Workspaces, Application projects, Library Projects
- [ ] Linting (TSLint, ESLint)
- [ ] Testing

## What Matters Today

- Community
  - Worldwide
  - Employment/Career
  - Public Resources
  - Open Source
  - Training
- Language
  - TypeScript, HTML, SASS
- Documentation
- Release Cadence
- Performance
  - Development
  - Building
  - Testing
- Platform
  - Conventional
  - Consistency
  - Opinionated
  - Component Suites and Design Systems
    - Material Desiggn
    - Infragistics Ignite
    - NgPrime
  - Code Organization, Sharing and Reuse
    - modules
    - services
    - libraries
    - pipes, components, directives
  - Angular Progressive Web Application (PWA) 
- Developer Tooling (Jest, Cypress, Nx)
  - Nx (Jest, Cypress)
  - Schematics and Generators
  - CLI
- Architecture
  - Modularity
  - Dependency Injection
  - CLEAN
  - Enterprise
  - Micro Frontend

## Resources

- [Angular Dev Tools - Chrome Web Store](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?hl=en&authuser=0)
- [Angular Versions (Wikipedia)](https://en.wikipedia.org/w/index.php?title=Angular_(web_framework)&action=edit&section=12)
- [Angular Ivy: the new Angular renderer explained](https://www.cleverti.com/blog/angular-ivy-the-new-angular-renderer-explained/)
- [Angular + Webpack 5 and Module Federation](https://www.steffendielmann.com/2021/05/07/microfrontend-with-angular-and-webpack-module-federation/)