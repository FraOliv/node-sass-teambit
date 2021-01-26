"use strict";

// webpack.mix.js
var mix = require('laravel-mix');

mix.js('src/app.js', 'js').sass('src/app.scss', 'css').setPublicPath('dist');