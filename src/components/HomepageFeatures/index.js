import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SECTIONS = [
  {
    to: '/docs/getting-started/overview',
    icon: '🚀',
    titles: {ukr: 'Початок', ru: 'Начало', en: 'Getting started'},
    descriptions: {
      ukr: 'Що таке WB24, як увійти до панелі та орієнтуватися в інтерфейсі.',
      ru: 'Что такое WB24, как войти в панель и ориентироваться в интерфейсе.',
      en: 'What WB24 is, how to log in, and how to navigate the panel.',
    },
  },
  {
    to: '/docs/dashboard',
    icon: '📊',
    titles: {ukr: 'Огляд', ru: 'Обзор', en: 'Overview'},
    descriptions: {
      ukr: 'Ключові показники мережі автоматів і деталізована статистика.',
      ru: 'Ключевые показатели сети автоматов и детальная статистика.',
      en: 'Key network metrics and detailed statistics.',
    },
  },
  {
    to: '/docs/machines',
    icon: '🤖',
    titles: {ukr: 'Автомати', ru: 'Автоматы', en: 'Machines'},
    descriptions: {
      ukr: 'Реєстр пристроїв, типи автоматів і керування прошивками.',
      ru: 'Реестр устройств, типы автоматов и управление прошивками.',
      en: 'Device registry, machine types, and firmware management.',
    },
  },
  {
    to: '/docs/orders',
    icon: '📦',
    titles: {ukr: 'Замовлення', ru: 'Заказы', en: 'Orders'},
    descriptions: {
      ukr: 'Історія продажів і ручне оформлення замовлень оператором.',
      ru: 'История продаж и ручное оформление заказов оператором.',
      en: 'Sales history and manual order entry by an operator.',
    },
  },
  {
    to: '/docs/payments',
    icon: '💳',
    titles: {ukr: 'Платежі', ru: 'Платежи', en: 'Payments'},
    descriptions: {
      ukr: 'Транзакції, еквайринг, фіскалізація та чеки.',
      ru: 'Транзакции, эквайринг, фискализация и чеки.',
      en: 'Transactions, acquiring, fiscalization, and receipts.',
    },
  },
  {
    to: '/docs/tariffs',
    icon: '💰',
    titles: {ukr: 'Тарифи', ru: 'Тарифы', en: 'Tariffs'},
    descriptions: {
      ukr: 'Тарифні плани та облік платежів за використання платформи.',
      ru: 'Тарифные планы и учёт платежей за использование платформы.',
      en: 'Tariff plans and platform usage payments.',
    },
  },
  {
    to: '/docs/settings',
    icon: '⚙️',
    titles: {ukr: 'Налаштування', ru: 'Настройки', en: 'Settings'},
    descriptions: {
      ukr: 'Користувачі, ролі, домени, валюти та робочі групи.',
      ru: 'Пользователи, роли, домены, валюты и рабочие группы.',
      en: 'Users, roles, domains, currencies, and work groups.',
    },
  },
];

function pickLocale(localeKey) {
  if (localeKey === 'ru' || localeKey === 'en' || localeKey === 'ukr') return localeKey;
  return 'ukr';
}

function Feature({to, icon, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={to} className={styles.featureCard}>
        <div className={styles.featureIcon} aria-hidden="true">{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  const {i18n} = useDocusaurusContext();
  const locale = pickLocale(i18n.currentLocale);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SECTIONS.map((s) => (
            <Feature
              key={s.to}
              to={s.to}
              icon={s.icon}
              title={s.titles[locale]}
              description={s.descriptions[locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
