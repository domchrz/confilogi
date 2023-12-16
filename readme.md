You can visit the gh-pages live at https://domchrz.github.io/confilogi

Scripts:
* npm start - starts devserver on localhost
* npm watch - builds bundle on every change with dev enviroment
* npm build - builds bundle with prod enviroment
* npm deploy - deploys on gh-pages

Written in:
1. React:
  * Context API used to create custom store
  * Custom hooks
  * Custom Svg components
  * Custom MediaQuery
2. SASS
  * Using BEM methodology
  * Swapping px for rem for full responsivness
  * AWD & RWD applied
3. HTML
  * semantic tags
  * aria-labels for graphic content

Build with Webpack:
  * babel for transpiling React
  * postcss for transpiling SASS
  * eslint for linting
  * html-webpack-plugin for injecting the scripts & styles
  * cross-env for setting env variable on diffrent operating systems