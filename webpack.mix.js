const mix = require('laravel-mix');

mix
  .setPublicPath('assets')

  // JS (ES modules)
  .js('src/js/frontend.js', 'frontend.js')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  })

  // SCSS
  .sass('src/scss/frontend.scss', 'frontend.css')

  .options({
    processCssUrls: false
  })

  .sourceMaps(!mix.inProduction(), 'source-map');

if (mix.inProduction()) {
  mix.minify('assets/frontend.css');
}
