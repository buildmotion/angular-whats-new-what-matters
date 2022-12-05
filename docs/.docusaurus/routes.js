import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/angular-whats-new-what-matters/blog',
    component: ComponentCreator('/angular-whats-new-what-matters/blog', '3dc'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/archive',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/archive', '826'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/first-blog-post',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/first-blog-post', 'ce2'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/long-blog-post',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/long-blog-post', '925'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/mdx-blog-post',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/mdx-blog-post', '9d3'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/tags',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/tags', '7d4'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/tags/docusaurus',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/tags/docusaurus', 'f5e'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/tags/facebook',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/tags/facebook', 'd28'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/tags/hello',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/tags/hello', 'af1'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/tags/hola',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/tags/hola', '48d'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/blog/welcome',
    component: ComponentCreator('/angular-whats-new-what-matters/blog/welcome', 'e32'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/markdown-page',
    component: ComponentCreator('/angular-whats-new-what-matters/markdown-page', 'b0d'),
    exact: true
  },
  {
    path: '/angular-whats-new-what-matters/docs',
    component: ComponentCreator('/angular-whats-new-what-matters/docs', '258'),
    routes: [
      {
        path: '/angular-whats-new-what-matters/docs/additional-resources/resources-and-information',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/additional-resources/resources-and-information', '986'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/category/additional-resources',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/category/additional-resources', 'bf7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/category/angular--what-matters',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/category/angular--what-matters', '4b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/category/angular--whats-new',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/category/angular--whats-new', '6f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/introduction',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/introduction', '64a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/what-matters/overview',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/what-matters/overview', '34c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/whats-new/functional-router-guards',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/whats-new/functional-router-guards', 'a81'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/angular-whats-new-what-matters/docs/whats-new/overview',
        component: ComponentCreator('/angular-whats-new-what-matters/docs/whats-new/overview', 'c16'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/angular-whats-new-what-matters/',
    component: ComponentCreator('/angular-whats-new-what-matters/', '973'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
