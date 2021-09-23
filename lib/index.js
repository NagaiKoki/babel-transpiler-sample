"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/web.timers.js");

new Promise(function (resolve) {
  setTimeout(function () {
    resolve("hoge!");
  }, 1000);
});
