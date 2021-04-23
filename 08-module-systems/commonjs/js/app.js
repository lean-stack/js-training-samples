((window, APP) => {

  const bus = APP.messageBus;

  bus.subscribe('log', console.log);

  APP.log('App started');

})(window, window.APP || {});
