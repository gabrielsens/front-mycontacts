export default class EventManager {
  constructor() {
    this.listeners = { };
  }

  on(event, listener) {
    if (!this.listenes[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }
}

const toastEventManager = new EventManager();

console.log(toastEventManager);
