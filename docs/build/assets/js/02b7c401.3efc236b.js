"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Push to Existing Github Repository",s={unversionedId:"additional-resources/push-to-existing-git-repo",id:"additional-resources/push-to-existing-git-repo",title:"Push to Existing Github Repository",description:"\u2026or create a new repository on the command line",source:"@site/docs/additional-resources/push-to-existing-git-repo.md",sourceDirName:"additional-resources",slug:"/additional-resources/push-to-existing-git-repo",permalink:"/angular-whats-new-what-matters/docs/additional-resources/push-to-existing-git-repo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/additional-resources/push-to-existing-git-repo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Resources and Information",permalink:"/angular-whats-new-what-matters/docs/additional-resources/resources-and-information"}},c={},u=[{value:"\u2026or create a new repository on the command line",id:"or-create-a-new-repository-on-the-command-line",level:2},{value:"asdf",id:"asdf",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-to-existing-github-repository"},"Push to Existing Github Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"git remote add origin https://github.com/buildmotion/angular-architecture-workshop.git\ngit branch -M main\ngit push -u origin main\n")),(0,o.kt)("h2",{id:"or-create-a-new-repository-on-the-command-line"},"\u2026or create a new repository on the command line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'echo "# test-2022" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin https://github.com/buildmotion/angular-architecture-workshop.git\ngit push -u origin main\n')),(0,o.kt)("h2",{id:"asdf"},"asdf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'There is no tracking information for the current branch.\nPlease specify which branch you want to merge with.\nSee git-pull(1) for details.\n\ngit pull https://github.com/buildmotion/angular-architecture-workshop.git main\n\n```ts\nFrom https://github.com/buildmotion/angular-architecture-workshop\n * branch            main       -> FETCH_HEAD\nhint: You have divergent branches and need to specify how to reconcile them.\nhint: You can do so by running one of the following commands sometime before\nhint: your next pull:\nhint: \nhint:   git config pull.rebase false  # merge\nhint:   git config pull.rebase true   # rebase\nhint:   git config pull.ff only       # fast-forward only\nhint: \nhint: You can replace "git config" with "git config --global" to set a default\nhint: preference for all repositories. You can also pass --rebase, --no-rebase,\nhint: or --ff-only on the command line to override the configured default per\nhint: invocation.\n')),(0,o.kt)("p",null,"If you wish to set tracking information for this branch you can do so with:"),(0,o.kt)("p",null,"git branch --set-upstream-to=origin/main main"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")))}p.isMDXComponent=!0}}]);