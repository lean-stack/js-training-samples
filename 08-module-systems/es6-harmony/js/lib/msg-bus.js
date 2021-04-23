((window, APP) => {

class MessageBus {

  constructor() {
    this.events = {};
  }

  subscribe(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  publish(event, payload) {
    if (!this.events[event]) {
      return;
    }
    for (const listener of this.events[event]) {
      listener(payload);
    }
  }
}

const messageBus = new MessageBus();

window.APP = {
  ...APP,
  messageBus
}

})(window, window.APP || {});

