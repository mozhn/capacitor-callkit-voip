import { WebPlugin } from '@capacitor/core';

import type { CallkitVoipPlugin } from './definitions';

export class CallkitVoipWeb extends WebPlugin implements CallkitVoipPlugin {
  async register(): Promise<void> {
    return;
  }

  async incomingCall({from}:{from:string}):Promise<void>{
    console.log(from)
    return;
  }
}
