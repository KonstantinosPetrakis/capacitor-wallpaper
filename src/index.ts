import { registerPlugin } from '@capacitor/core';

import type { WallpaperPlugin } from './definitions';

const Wallpaper = registerPlugin<WallpaperPlugin>('Wallpaper', {
  web: () => import('./web').then(m => new m.WallpaperWeb()),
});

export * from './definitions';
export { Wallpaper };
