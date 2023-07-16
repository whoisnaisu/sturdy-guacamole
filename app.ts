import { IDepC } from "./interfaces/idepc";
import container from "./inversify.config";
import { TYPES } from "./utils/types";

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();
