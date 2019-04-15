import prompts from 'prompts';
import {Actions} from "../constants/actions.const";

export class Prompts {
  static async getValues() {
    return await prompts([
      {
        type: 'select',
        name: 'action',
        message: 'Pick a action',
        choices: [
          {
            title: 'Encode',
            value: Actions.ENCRYPT
          },
          {
            title: 'Decode',
            value: Actions.DECRYPT
          }
        ]
      },
      {
        type: 'text',
        name: 'text',
        message: (prev, obj) => {
          if (obj.action === Actions.DECRYPT) {
            return 'Enter the text you wish to decrypt.';
          }
          return 'Enter the text you wish to encrypt.'
        }
      },
      {
        type: (prev, obj) => {
          if (obj.action === Actions.DECRYPT) {
            return null;
          }
          return 'number'
        },
        name: 'shift',
        min: 1,
        max: 26,
        message: 'Enter shift (from 1 to 26)',
      }
    ]);
  }
}
