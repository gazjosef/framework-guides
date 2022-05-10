import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propNames: string): number | string {
    return this.data[propNames];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
