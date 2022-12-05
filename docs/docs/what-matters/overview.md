---
sidebar_position: 2
---

# What Matters in Angular

1. Library Projects
2. Micro Frontend
3. CLI
4. Schematics & Generators
5. Performance
   1. Lazy-loading
6. Dependency Injection
7. TypeScript
8. i18n & a11y
9. Eco-System
   1. Modules
   2. Routing
   3. Reactive Forms
   4. Material Design
10. Nx Workspace
11. Community
    1.  Documentation
    2.  Training
    3.  Conferences
    4.  Meetups
    5.  Open-Source
12. 3rd-party Vendors
13. Progressive Web Applications
14. Release Cadence & Upgrades
15. Testing and Linting Tools

## 1. Library Projects

## Micro Frontend

## CLI

```ts
npx create-nx-workspace workspace --npm-scope=buildmotion --preset=empty --style=scss --packageManager=yarn --nx-cloud=false
cd workspace
yarn add -D @nrwl/angular
# Yarn
yarn nx g @nrwl/angular:app dashboard --mfe --mfeType=host --routing=true --style=scss
yarn nx g @nrwl/angular:app portal --mfe --mfeType=host --routing=true --style=scss

yarn nx g @nrwl/angular:app accounts --mfe --mfeType=remote --port=4201 --host=dashboard --routing=true --style=scss
yarn nx g @nrwl/angular:app admin    --mfe --mfeType=remote --port=4202 --host=dashboard --routing=true --style=scss
yarn nx g @nrwl/angular:app billing  --mfe --mfeType=remote --port=4203 --host=dashboard --routing=true --style=scss
yarn nx g @nrwl/angular:app products --mfe --mfeType=remote --port=4204 --host=dashboard --routing=true --style=scss
yarn nx g @nrwl/angular:app reports  --mfe --mfeType=remote --port=4205 --host=dashboard --routing=true --style=scss
yarn nx g @nrwl/angular:app security --mfe --mfeType=remote --port=4206 --host=dashboard --routing=true --style=scss

nx generate @nrwl/angular:application b2b --style=scss --routing

nx g @nrwl/angular:module crossCutting --flat --project=accounts
nx g @nrwl/angular:module crossCutting --flat --project=admin
nx g @nrwl/angular:module crossCutting --flat --project=billing
nx g @nrwl/angular:module crossCutting --flat --project=products
nx g @nrwl/angular:module crossCutting --flat --project=reports
nx g @nrwl/angular:module crossCutting --flat --project=security

nx generate @nrwl/angular:library --name=accounts-ui --style=scss --directory=accounts --importPath=@buildmotion/accounts/accounts-ui --lazy --linter=eslint --routing --simpleModuleName
nx generate @nrwl/angular:library --name=admin-ui --style=scss --directory=admin --importPath=@buildmotion/admin/admin-ui --lazy --linter=eslint --routing --simpleModuleName
nx generate @nrwl/angular:library --name=security-ui --style=scss --directory=security --importPath=@buildmotion/security/security-ui --lazy --linter=eslint --routing --simpleModuleName
nx generate @nrwl/angular:library --name=reports-ui --style=scss --directory=reports --importPath=@buildmotion/reports/reports-ui --lazy --linter=eslint --routing --simpleModuleName
nx generate @nrwl/angular:library --name=billing-ui --style=scss --directory=billing --importPath=@buildmotion/billing/billing-ui --lazy --linter=eslint --routing --simpleModuleName
nx generate @nrwl/angular:library --name=products-ui --style=scss --directory=products --importPath=@buildmotion/products/products-ui --lazy --linter=eslint --routing --simpleModuleName

nx g @nrwl/angular:library configuration    --simpleModuleName --linter=eslint --importPath=@buildmotion/configuration
nx g @nrwl/angular:library rule-engine      --simpleModuleName --linter=eslint --importPath=@buildmotion/rule-engine
nx g @nrwl/angular:library logging          --simpleModuleName --linter=eslint --importPath=@buildmotion/logging
nx g @nrwl/angular:library error-handling   --simpleModuleName --linter=eslint --importPath=@buildmotion/error-handling
nx g @nrwl/angular:library actions          --simpleModuleName --linter=eslint --importPath=@buildmotion/actions
nx g @nrwl/angular:library common           --simpleModuleName --linter=eslint --importPath=@buildmotion/common
nx g @nrwl/angular:library http-service     --simpleModuleName --linter=eslint --importPath=@buildmotion/http-service
nx g @nrwl/angular:library foundation       --simpleModuleName --linter=eslint --importPath=@buildmotion/foundation
nx g @nrwl/angular:library validation       --simpleModuleName --linter=eslint --importPath=@buildmotion/validation
nx g @nrwl/angular:library notifications    --simpleModuleName --linter=eslint --importPath=@buildmotion/notifications
nx g @nrwl/angular:library version-check    --simpleModuleName --linter=eslint --importPath=@buildmotion/version-check
nx g @nrwl/angular:library analytics        --simpleModuleName --linter=eslint --importPath=@buildmotion/analytics

yarn add -D @nrwl/nest
nx generate @nrwl/nest:application accounts-api --frontendProject accounts
nx generate @nrwl/nest:application admin-api    --frontendProject admin
nx generate @nrwl/nest:application billing-api  --frontendProject billing
nx generate @nrwl/nest:application products-api --frontendProject products
nx generate @nrwl/nest:application reports-api  --frontendProject reports
nx generate @nrwl/nest:application security-api --frontendProject security

nx run-many --target=lint --all --parallel=true --skip-nx-cache=true --fix
nx run-many --target=test --all --parallel=true --skip-nx-cache=true --fix
```


## Resources

- [Angular Upgrade Tools](https://update.angular.io/)
- [Angular Dev Tools - Chrome Web Store](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh?hl=en&authuser=0)
- [Angular Versions (Wikipedia)](https://en.wikipedia.org/w/index.php?title=Angular_(web_framework)&action=edit&section=12)
- [Angular Ivy: the new Angular renderer explained](https://www.cleverti.com/blog/angular-ivy-the-new-angular-renderer-explained/)
- [Angular + Webpack 5 and Module Federation](https://www.steffendielmann.com/2021/05/07/microfrontend-with-angular-and-webpack-module-federation/)