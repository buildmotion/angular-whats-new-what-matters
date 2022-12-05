---
sidebar_position: 2
---

# Push to Existing Github Repository

```ts
git remote add origin https://github.com/buildmotion/angular-architecture-workshop.git
git branch -M main
git push -u origin main
```

## …or create a new repository on the command line

```ts
echo "# test-2022" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/buildmotion/angular-architecture-workshop.git
git push -u origin main
``` 

## asdf

```ts
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

git pull https://github.com/buildmotion/angular-architecture-workshop.git main

```ts
From https://github.com/buildmotion/angular-architecture-workshop
 * branch            main       -> FETCH_HEAD
hint: You have divergent branches and need to specify how to reconcile them.
hint: You can do so by running one of the following commands sometime before
hint: your next pull:
hint: 
hint:   git config pull.rebase false  # merge
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint: 
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
```

If you wish to set tracking information for this branch you can do so with:

git branch --set-upstream-to=origin/main main
```