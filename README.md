## Overview

Movie app consist of 3 pages, movie list, movie detail, and favorite list. Built using Next.js, Typescript, and styled-components with internationalization feature and responsive design implementation. Features available are: movie list, movie detail, favorite list, language toggle, and click like and favorite.

Click [here](https://drive.google.com/drive/folders/1ZustxAQOjYY-cukPsImC1uvbgh8htC-y?usp=sharing) to see the video demo


### Main Technologies

* [Next.js](https://nextjs.org/) - React framework with features like server-side rendering and generating static pages.
* [Axios](https://github.com/axios/axios) - Library for API consumption.
* [Antd](https://ant.design/) - An UI design language and React UI library to build user interface.
* [i18next](https://www.i18next.com/) and [React i18next](https://github.com/i18next/react-i18next) - Internationalization framework.
* [Styled-Components](https://styled-components.com/) - A library which allows to implement and write CSS in JavaScript file.
* [Typescript](https://www.typescriptlang.org/) - Strongly typed language which is the superset of JavaScript.


### Installing

You can use npm to install:

```
npm install
```

Run it using:

```
npm run dev
```
Then open in the browser by entering this url http://localhost:3000/


### Structure
```
.
    ├── components
    │   ├── card             
    │   │   ├── card-view.tsx       # component on movie list page, where item 'favourite' stored in local storage if user click 
    │   ├── index.ts            
    ├── content                     # content for state management in movie list
    │   ├── content-ctx.tsx         
    ├── locales                     # store language content for internationalization 
    │   ├── en                      # english
    │   │   ├── common.json
    │   │   ├── movie.json
    │   ├── id                      # indonesia
    │   │   ├── common.json
    │   │   ├── movie.json  
    ├── pages
    │   ├── favourite               # favorite page, implementing styled-component
    │   │   ├── favourite.style.tsx
    │   │   ├── index.tsx
    │   ├── movie-detail            # movie-detail page, implementing styled-component
    │   │   ├── [id].tsx
    │   │   ├── movie-detail.style.tsx
    │   ├── _app.tsx                # maintain header, language toggle, footer, and main page component
    │   ├── app.style.tsx           
    │   ├── index.tsx               # movie list page, logic implementation of API consumption
    ├── public 
    ├── styles                      # general styles used accross pages
    │   ├── _spacing.scss
    │   ├── _typography.scss  
    │   ├── _variables.scss  
    │   ├── general.scss  
```