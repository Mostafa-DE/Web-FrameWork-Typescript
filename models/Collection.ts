import axios, { AxiosResponse } from "axios";
// import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  // T the type of class
  // K the structure of th data we get back like interface = {UserProps}
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.map((value: K) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger("change");
    });
  }
}
