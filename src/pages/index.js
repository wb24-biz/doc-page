import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const COPY = {
  ukr: {
    tagline: 'Документація до адмін-панелі WaterBiz',
    cta: 'Почати →',
    metaDescription: 'Документація до платформи WB24.BIZ для керування мережею вендингових автоматів.',
  },
  ru: {
    tagline: 'Документация к админ-панели WaterBiz',
    cta: 'Начать →',
    metaDescription: 'Документация к платформе WB24.BIZ для управления сетью вендинговых автоматов.',
  },
  en: {
    tagline: 'WaterBiz admin panel documentation',
    cta: 'Get started →',
    metaDescription: 'Documentation for the WB24.BIZ platform — manage your water vending machine network.',
  },
};

function pickLocale(localeKey) {
  if (localeKey === 'ru' || localeKey === 'en' || localeKey === 'ukr') return localeKey;
  return 'ukr';
}

function HomepageHeader() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const locale = pickLocale(i18n.currentLocale);
  const copy = COPY[locale];
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{copy.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            {copy.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const locale = pickLocale(i18n.currentLocale);
  const copy = COPY[locale];
  return (
    <Layout title={siteConfig.title} description={copy.metaDescription}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
