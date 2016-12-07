"use strict"

import app from 'todos-view'

/* simulate deviceready event of cordova */
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const deviceReadyEvent = new CustomEvent('deviceready'); 

ready(() => document.dispatchEvent(deviceReadyEvent));

app.init();