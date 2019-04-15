import {Prompts} from "./prompt/prompts";

export class Application {
  async init() {
    const values = await Prompts.getValues();
  }
}
