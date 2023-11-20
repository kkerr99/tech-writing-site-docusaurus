import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  /*
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  */
  {
    title: 'Experienced',
    Svg: require('@site/static/img/mountain-svgrepo-com.svg').default,
    description: (
      <>
        I have over 20 years of experience as a technical writer. I know how to write clear, concise documentation that will make your software shine. 
      </>
    ),
  },
  {
    title: 'Strong Technical Skills',
    Svg: require('@site/static/img/programmer-thought-svgrepo-com.svg').default,
    description: (
      <>
        I have a Computer Science degree, and I have experience as a software engineer. I can do technical tasks most technical writers can't.
      </>
    ),
  },
  {
    title: 'Gets the Job Done',
    Svg: require('@site/static/img/worker-digging-a-hole-svgrepo-com.svg').default,
    description: (
      <>
        Just tell me what you need, and I will get it done. I don't need hand-holding.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
