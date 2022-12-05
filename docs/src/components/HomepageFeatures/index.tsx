import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Why this course...?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        There are many discussions about web frameworks these days. Although important, more 
        important is what you do with the tools and materials to develop the next amazing enterprise web application. This 
        course provides information on that topic: <b>architecture</b>.
      </>
    ),
  },
  {
    title: 'CLEAN Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This course will teach you well-known principles from CLEAN code and architecture. You will learn these principles and
        how they can be applied in your projects.
      </>
    ),
  },
  {
    title: 'Tools & Materials',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This course utilizes Angular, NestJS, and Nx Dev Tools. You will see how you can create
        a monorepo that accelerates your development workflow and minimizes your code footprint by
        reusing and sharing code.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
