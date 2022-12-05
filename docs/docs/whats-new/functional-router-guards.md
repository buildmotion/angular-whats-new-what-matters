---
sidebar_position: 2
---

# Functional Router Guards

Existing|Current way to create a guard and use the guard in a route:

```ts
@Injectable({ providedIn: 'root' })
export class MyGuardWithDependency implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}

const route = {
  path: 'somePath',
  canActivate: [MyGuardWithDependency]
};
```

New:

```ts
const route = {
  path: 'admin',
  canActivate: [() => inject(LoginService).isLoggedIn()]
};
```