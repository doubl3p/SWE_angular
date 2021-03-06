'use strict';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var gulp = require('gulp'),
    //lädt alle plugins die mit gulp in pachage.josn mit gulp beginnen. Werden erst dann geladen wenn . Operator aufgerufen wird. Rest müssen wir mit require machen
    //plugins = require('gulp-load-plugins')(),
    webserver = require('gulp-webserver');


// webserver hochfahren
// in Eckigen Klammer, das was vorher gemacht werden sollen (also andere tasks), bevotr webserver task gestartet wird
// [] Ausführungsreihenfolge: parallel! --> schneller In Grunt müsste man das konfigurieren


gulp.task('webserver', function () {
  // welche Dateien

    // gulp oben definiert, src na klar die Quelle also im build ordner
    gulp.src('app')
      // pipe ist wie das builderPattern
      .pipe(webserver({
        host: '0.0.0.0',
        port: 9443,
        livereload: true,
       // https: true,
        proxies: [{
            source: "/shop/rest",
            target: "https://localhost:8443/shop/rest"
        }]

      }));
});