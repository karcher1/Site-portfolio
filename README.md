# Business Analyst RPG Portfolio

Одностраничное портфолио Business Analyst в профессиональном 32-bit RPG-стиле.

## Технологии

- React
- TypeScript
- Vite
- Tailwind CSS

## Установка зависимостей

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

После запуска Vite покажет локальный URL в терминале.

## Где редактировать контент

Весь редактируемый текст портфолио хранится в:

```text
src/data/portfolioContent.ts
```

Там можно заменить имя, уровень, город, контакты, описания секций, навыки, инструменты, кейсы и ссылки.

## Как заменить ассеты

Сгенерированные изображения лежат в:

```text
public/assets/
```

Имена и назначение файлов описаны в:

```text
docs/04-assets-manifest.md
```

Для замены ассетов положите новые файлы в те же папки и используйте те же имена. Если файл из манифеста временно отсутствует, интерфейс использует fallback там, где он настроен.

## Production build

```bash
npm run build
```

Готовая сборка появится в папке:

```text
dist/
```

## Preview production build

```bash
npm run preview
```

## Перед первым публичным деплоем

- Заменить `[Твоё имя]`, уровень и город в `src/data/portfolioContent.ts`.
- Заменить placeholder-контакты: `[email@example.com]`, `[linkedin-url]`, `[telegram-url]`, `[cv-file-or-link]`.
- Обновить `href` для контактов после замены placeholder-значений.
- Добавить `public/assets/brand/og-image.webp`, если нужен social preview.
- При необходимости заменить анонимизированные кейсы на реальные, если их можно публиковать.
