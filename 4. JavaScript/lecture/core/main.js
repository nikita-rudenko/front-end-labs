import {Prompts} from "./prompts";
import "colors";
import fs from 'fs';
import {runScript} from "./runScript";

export class Application {
  async init() {
    const prompts = new Prompts();
    while (true) {
      try {
        let pathFile = await prompts.select();

        let file = fs.readFileSync(`${__dirname}/examples/${pathFile}`, `utf8`);
        console.log(file.bgBlack.white);
        let execute = await prompts.execute();
        if (execute) {
          await runScript(`${__dirname}/examples/${pathFile}`)
        }
        let choise = await prompts.reset();
        if (!choise) {
          break;
        } else {
          console.clear();
        }
      } catch (e) {
        break;
      }
    }
  }
}
