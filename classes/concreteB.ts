import { IDepB } from "../interfaces/idepb";
import { injectable } from "inversify";

@injectable()
export class ConcreteB implements IDepB {
  doB(): void {
    console.log("doing B");
  }
}
