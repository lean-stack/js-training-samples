((window, APP) => {

  const bus = APP.messageBus;

  const log = (msg, level = 'INFO') => {
    bus.publish('log', `${new Date().toLocaleTimeString()} [${level}]: ${msg}`);
  }

  const error = (msg) => {
    log(msg, 'ERROR');
  }

window.APP = {
  ...APP,
  log,
  error
}

})(window, window.APP || {});
