import { registerPlugin } from '@capacitor/core';

import type { CallkitVoipPlugin } from './definitions';

const CallKitVoip = registerPlugin<CallkitVoipPlugin>('CallkitVoip', {
  web: () => import('./web').then(m => new m.CallKitVoipWeb()),
});

export * from './definitions';
export { CallKitVoip };
