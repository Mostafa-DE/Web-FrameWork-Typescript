type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // we make this function arrow function beacuse key "this" will keep tract in this class only, make this change will avoide us problem with key "this" to be undefined
    // make events to user like "Click"  or "scroll" whatever :)
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string) => {
    // we make this function arrow function beacuse key "this" will keep tract in this class only, make this change will avoide us problem with key "this" to be undefined
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return console.log(
        `"${eventName}" does not exsit here, make sure you write a valid events `
      );
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
