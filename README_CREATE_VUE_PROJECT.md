# Создание Vue 3 + TypeScript проекта (Ubuntu + npm)

Ниже пример `README.md` для проекта на Vue 3 с TypeScript, созданного через `create-vue` на Ubuntu 24.04, Node.js 22.13.1 и npm 11.4.2.[^1][^2][^3]

***

# Vue 3 + TypeScript + Vite

Проект создан с помощью официального шаблона `create-vue` (Vite + Vue 3 + TypeScript).[^2][^4]

## Требования

- Linux Ubuntu 24.04
- Node.js 22.13.1
- npm 11.4.2

Проверить версии:

```bash
node -v
npm -v
```


## Создание проекта

Вариант 1 (из книги Майи Шавин):

```bash
npm init vue@latest my-vue-ts-app
```

Вариант 2 (актуальная форма из документации):

```bash
npm create vue@latest my-vue-ts-app
```

Во время интерактива выберите:

- Add TypeScript? → Yes
- Остальные опции (Vue Router, Pinia, Vitest, ESLint, Prettier) — по потребностям.

[^4][^1][^2]

## Установка зависимостей

```bash
cd my-vue-ts-app
npm install
```


## Основные команды npm

Запуск dev-сервера:

```bash
npm run dev
```

Сборка для production:

```bash
npm run build
```

Превью production-сборки (если шаблон добавил скрипт):

```bash
npm run preview
```


## Проверка типов (TypeScript + vue-tsc)

Однократная проверка типов:

```bash
npx vue-tsc --noEmit
```

Режим watch:

```bash
npx vue-tsc --noEmit --watch
```


## Линтинг и форматирование

Если при создании проекта были выбраны ESLint и Prettier:

Запуск линтера:

```bash
npm run lint
```

Автофикс (если настроен в скриптах `package.json`):

```bash
npm run lint -- --fix
```

Форматирование с Prettier (через npx, если нет отдельного скрипта):

```bash
npx prettier "src/**/*.{ts,tsx,js,jsx,vue}" --write
```


## Тесты (Vitest)

Если при создании проекта был выбран Vitest:

Запуск тестов один раз:

```bash
npm run test
```

Запуск тестов в watch-режиме:

```bash
npm run test:watch
```

(точное имя скрипта смотрите в `package.json`, шаблон может отличаться)[^2]

## Полезные команды для Vite

Запуск dev-сервера на конкретном порту:

```bash
npm run dev -- --port 3000
```

Сборка с указанием базового пути (через конфиг `vite.config.ts`):

```bash
npm run build
```


## Работа с зависимостями

Установка новой библиотеки (пример — axios):

```bash
npm install axios
```

Установка dev-зависимости (пример — ESLint плагин):

```bash
npm install -D eslint-plugin-vue
```

Обновление всех зависимостей до последних совместимых версий:

```bash
npm update
```


## Запуск в Docker (минимальный пример)

Создать `Dockerfile` ( Node 22 + npm):

```Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
```

Сборка образа:

```bash
docker build -t my-vue-ts-app .
```

Запуск контейнера:

```bash
docker run -p 4173:4173 my-vue-ts-app
```


***

[^1]: https://ru.vuejs.org/guide/typescript/overview

[^2]: https://vuejs.org/guide/quick-start

[^3]: https://vuejs.org/guide/typescript/overview

[^4]: https://github.com/vuejs/create-vue

[^5]: https://apptask.ru/blog/vuejs-s-ispolzovaniem-typescript

[^6]: https://idroot.us/install-vue-js-ubuntu-24-04/

[^7]: https://www.server-world.info/en/note?os=Ubuntu_24.04\&p=nodejs\&f=7

