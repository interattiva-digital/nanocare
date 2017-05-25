let mix = require('laravel-mix');

mix.options({
    processCssUrls: false
});

mix.sass('public/theme/nanocare/source/scss/app.scss', 'public/theme/nanocare/dist');
mix.js('public/theme/nanocare/source/js/app.js', 'public/theme/nanocare/dist');