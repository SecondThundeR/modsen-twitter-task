# Tестовое задание приложение Modsen Twitter

## Техническое задание

Реализовать приложение, схожее по своей функциональности с платформой Twitter.

## Необходимый функционал

- авторизация пользователя
- регистрация пользователя
- возможность создания нового tweet
- поиск других tweets
- валидация введенных данных
- изменение данных пользователя
- смена темы приложения

### Дополнительные указания

- Реализация Loader для отображения запасного UI при подгрузке данных
- Использование библиотек для стилей запрещены
- Все данные о пользователе, tweets хранятся в firebase

## Пример графического представления

Ссылка на макет: [Макет "Modsen Twitter"](<https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=0%3A1&t=T3Vik0PUWZKXqlCN-0>).

## Также проект предполагает

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure)
- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements)
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, ...)
- Настроить конфигурации ***babel***, ***eslint***
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов
- Обработку ошибок через паттерн ***Error Boundaries***
- Использование алиасов для импортирования файлов
- Оптимизацию дизайна под мобильные устройства
- Покрытие тестами всего приложения (cypress, unit)
- Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле

## Описание экранов

1. Страница [Sign Up](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A368&t=T3Vik0PUWZKXqlCN-0)
    На данной странице пользователь может ввести свое имя и номер телефона, дату рождения для того, чтобы зарегистрироваться. Все поля должны быть обязательными.
    При нажатии на "Use email" пользователя переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).
    На этой странице пользователь может зарегистрироваться с помощью google-аккаунта или перейти на страницу [регистрации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A350&t=T3Vik0PUWZKXqlCN-0)

2. Страница [Log In](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Twitter?node-id=1%3A350&t=V0ikbnKD4YdfNcCd-0)

    На данной странице пользователь может зайти в аккаунт введя свой логин или телефон. В случае того, если аккаунта не существует, оповестить об этом пользователя.
    При нажатии на "Sign up to Twitter" пользователь переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).

3. Страница [Profile](https://www.figma.вom/file/KaвuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A58&t=T3Vik0PUWZKXqlCN-0)

    На странице профиля отображается информация о пользователе. При нажатии на edit profile открывается модальное окно в котором можно добавить/изменить данные о пользователе:
    имя, фамилия, пароль, пол, ссылка на телеграмм.
    В категории "What’s happening" можно создать новый пост, также есть возможность добавить картинку, поставить лайк и удалить созданный tweet.
    В категории Tweets отображаются созданные пользователем посты.
    В поле ввода Search Input можно ввести название tweet и в списке должен появиться tweet, при нажатии на который он открывается в новом окне.
    При нажатии на Tweet(в сайдбаре) открывается модальное окно, в котором можно также создать новый tweet(также с добавление картинки).
    Также предусмотрена возможность выхода из аккаунта.

4. Страница [Feed](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A465&t=T3Vik0PUWZKXqlCN-0)

    В шапке страницы есть возможность сменить общую тему приложения.
    На странице есть возможность создать новый твит, который добавится на текущей странице и на странице самого пользователя, а также отображаются посты других пользователей.
    В поиске Search Twitter происходит список пользователей Twitter(поиск должен происходить на стороне firebase и была возможность у твитов поставить лайк).

5. Страница [icons](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=6%3A279&t=T3Vik0PUWZKXqlCN-0) содержит вспомогательные иконки для приложения.

## Используемые технологии

- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой;
- ***eslint*** - линтер для JavaScript кода;
- ***firebase*** - платформа для разработки приложений, предоставляет облачное хранилище, аналитику и многое другое;
- ***yarn*** - менеджер пакетов;
- ***react-hook-forms*** - библиотека для обработки элементов ввода формы;
- ***styled-components*** - система стилизации react компонентов;
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов;
- ***typescript*** - строго типизированный язык для уменьшения количества потенциальных багов;
- ***vite*** -  сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл;
- ***cypress*** — e2e тестирование для web-приложений;
- ***jest*** — unit-тестирование.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Модуль авторизации;
- Модуль регистрации;
- Модуль смены темы;
- Модуль создания нового tweet;
- Модуль данных о пользователе.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[Vite](https://vitejs.dev/)

[Firebase](https://firebase.google.com/docs/reference/js?hl=ru)

[Yup](https://www.npmjs.com/package/yup)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Styled-components](https://www.styled-components.com/docs)

[Redux-persist](https://github.com/rt2zz/redux-persist)

[Redux-saga](https://redux-saga.js.org/)

[GitHub Actions](https://github.com/features/actions)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
