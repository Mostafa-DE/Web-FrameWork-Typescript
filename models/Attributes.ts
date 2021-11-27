export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    // we make this function arrow function beacuse key "this" will keep tract in this class only, make this change will avoide us problem with key "this" to be undefined
    // very important to understand what K and what T is doing here
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  }
}
