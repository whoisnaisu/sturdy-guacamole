import "reflect-metadata";
import { Container } from "inversify";
import { IDepA } from "./interfaces/idepa";
import { IDepB } from "./interfaces/idepb";
import { IDepC } from "./interfaces/idepc";
import { ConcreteA } from "./classes/concreteA";
import { ConcreteB } from "./classes/concreteB";
import { ConcreteC } from "./classes/concreteC";
import { TYPES } from "./utils/types";

let container = new Container({
  defaultScope: "Singleton",
});

// define a dependency scope

container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope(); // default (transient)

container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope(); // will return the same instance until we call container.unbind

export default container;
