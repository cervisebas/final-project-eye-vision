const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');


minify({
    compressor: uglifyjs,
    input: './electron/app/index.js',
    output: './electron/app/index.js',
    callback: (err, min)=>console.log('"index.js" minify!!!')
});
minify({
    compressor: uglifyjs,
    input: './electron/app/setupEvents.js',
    output: './electron/app/setupEvents.js',
    callback: (err, min)=>console.log('"setupEvents.js" minify!!!')
});
minify({
    compressor: uglifyjs,
    input: './electron/app/windowOpenPreload.js',
    output: './electron/app/windowOpenPreload.js',
    callback: (err, min)=>console.log('"windowOpenPreload.js" minify!!!')
});