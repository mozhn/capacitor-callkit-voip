import { registerPlugin } from '@capacitor/core';

import type { CallkitVoipPlugin } from './definitions';

const CallkitVoip = registerPlugin<CallkitVoipPlugin>('CallkitVoip', {
  web: () => import('./web').then(m => new m.CallkitVoipWeb()),
});

export * from './definitions';
export { CallkitVoip };
