# WB24.BIZ — Документація

Документаційний портал до сервісів **WB24.BIZ**, опублікований за адресою [https://doc.wb24.biz](https://doc.wb24.biz). Описує адмін-панель WB24 для керування мережею вендингових автоматів з продажу води.

Сайт побудовано на [Docusaurus 3.9](https://docusaurus.io/) (React 19, classic preset). Дизайн узгоджений з адмін-панеллю (`frontWatermat/dashboard`): шрифт Roboto, акцент `#228be6`, темний градієнт навбару й футера.

## Локалі

Документація доступна трьома мовами:

| Локаль | Мова | URL |
|--------|------|-----|
| `ukr` | Українська (за замовчуванням) | `/` |
| `ru` | Русский | `/ru/` |
| `en` | English | `/en/` |

Перемикач мови — у правому верхньому куті навбару. Ukr-контент живе у `docs/`; ru/en — у `i18n/<locale>/docusaurus-plugin-content-docs/current/`.

## Вимоги

- Node.js ≥ 20

## Команди

```bash
npm install              # встановити залежності
npm start                # dev-сервер з live reload (uk-локаль за замовчуванням)
npm start -- --locale ru # dev-сервер для конкретної локалі
npm run build            # зібрати статику для всіх локалей у build/
npm run serve            # перегляд продакшен-білда локально
npm run clear            # очистити кеш .docusaurus/ при дивних артефактах
npm run write-translations -- --locale ru   # оновити шаблони перекладів для ru
npm run write-heading-ids                   # стабільні якорі для заголовків
```

`onBrokenLinks: 'throw'` — будь-яке зламане внутрішнє посилання валить білд.

## Структура

```
docs/                                # джерело документації (укр)
  intro.md                           # вступ + вхід у систему
  getting-started/                   # Початок — огляд, вхід
  dashboard/                         # Огляд мережі, статистика
  machines/                          # Автомати, типи, прошивки
  orders/                            # Замовлення та оформлення
  payments/                          # Платежі, еквайринг, чеки, фіскалізація
  tariffs/                           # Тарифні плани та платежі за тарифи
  settings/                          # Користувачі, ролі, валюти, домени, групи
i18n/
  ru/                                # дзеркало docs/ для російської + theme JSON
  en/                                # дзеркало docs/ для англійської + theme JSON
src/
  pages/index.js                     # лендінг із картками секцій
  components/HomepageFeatures/       # сітка карток на лендінгу
  css/custom.css                     # глобальні стилі (палітра WB24)
static/img/                          # логотипи, фавікон
docusaurus.config.js                 # конфіг сайту, навбар, футер, i18n
sidebars.js                          # автогенерований сайдбар із docs/
```

Бічне меню формується автоматично зі структури `docs/`. Назви та порядок категорій задаються через `_category_.json` у кожній підпапці.

## Додавання нової сторінки

1. Створіть `.md`-файл у відповідній папці `docs/<section>/`.
2. На початку додайте frontmatter `--- sidebar_position: N ---`.
3. Скопіюйте файл у `i18n/ru/docusaurus-plugin-content-docs/current/<section>/` і `i18n/en/.../`, замінивши блок `:::note Чернетка...` на `:::warning Этот раздел ещё не переведён.` / `:::warning This section has not been translated yet.`.
4. Перезапустіть `npm start` або зачекайте на live reload.

## Деплой

```bash
npm run build
# вміст build/ розгорнути на статичний хостинг
```

Команда `npm run deploy` налаштована на GitHub Pages (`wb24.biz/doc-page`); для продакшен-домену `doc.wb24.biz` достатньо викласти `build/` на потрібний хостинг.

## Конвенції

- MDX підтримується у `docs/`, але без потреби — звичайний `.md`.
- Активи секції лежать поряд з її документами (наприклад, `docs/<section>/img/`).
- `.docusaurus/` — генерований кеш, не редагуйте.
