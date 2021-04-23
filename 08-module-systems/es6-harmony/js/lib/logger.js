((window, APP) => {

  const bus = APP.messageBus;

  function log(msg, level = 'INFO') {
    bus.publish('log', `${new Date().toLocaleTimeString()} [${level}]: ${msg}`);
  }

  function error(msg) {
    log(msg, 'ERROR');
  }

window.APP = {
  ...APP,
  log,
  error
}

})(window, window.APP || {});
