import prompts from 'prompts';
import {lstatSync, readdirSync} from "fs";

export class Prompts {

  constructor() {
  }

  async select() {
    let directory = await this.selectDirectory();
    return await this.selectFile(directory);
  }

  async selectDirectory() {
    return await prompts(
      {
        type: 'select',
        name: 'directory',
        message: 'Select directory',
        choices: readdirSync(__dirname + '/examples/').map(file => {
          return {title: file, value: file}
        }),
      }
    ).then((data) => {
      return data.directory
    });
  }

  async selectFile(path) {
    const files = readdirSync(`${__dirname}/examples/${path}`).map(file => {
      return {title: file, value: file}
    })
    let file = await prompts(
      {
        type: 'select',
        name: 'file',
        message: 'Select file',
        choices: files
      }
    ).then((data) => {
      return data.file
    });
    let resultPath = `${path}/${file}`;
    if (lstatSync(`${__dirname}/examples/${resultPath}`).isDirectory()) {
      return await this.selectFile(resultPath);
    }
    return resultPath;
  }

  async reset() {
    return await prompts(
      {
        type: 'toggle',
        name: 'choise',
        message: 'Do you want to continue?',
        initial: true,
        active: 'Сontinue',
        inactive: 'Exit'
      }
    ).then((data) => {
      return data.choise
    })
  }

  async execute(){
    return await prompts(
      {
        type: 'toggle',
        name: 'choise',
        message: 'Do you want to execute?',
        initial: true,
        active: 'Execute',
        inactive: 'No'
      }
    ).then((data) => {
      return data.choise
    })
  }
}
