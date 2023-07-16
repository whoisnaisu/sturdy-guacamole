import { IDepC } from "../interfaces/idepc";
import { IDepA } from "../interfaces/idepa";
import { IDepB } from "../interfaces/idepb";
import { inject, injectable } from "inversify";
import { TYPES } from "../utils/types";

@injectable()
export class ConcreteC implements IDepC {
  constructor(
    @inject(TYPES.IDepA)
    private _depA: IDepA,
    @inject(TYPES.IDepB)
    private _depB: IDepB
  ) {}
  doC(): void {
    this._depA.doA();
    this._depB.doB();
    console.log("doing C");
  }
}
