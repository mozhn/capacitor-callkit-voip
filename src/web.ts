import { WebPlugin } from '@capacitor/core';

import type { CallkitVoipPlugin } from './definitions';

export class CallkitVoipWeb extends WebPlugin implements CallkitVoipPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
