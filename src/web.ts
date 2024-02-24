import { WebPlugin } from '@capacitor/core';

import type { WallpaperPlugin } from './definitions';

export class WallpaperWeb extends WebPlugin implements WallpaperPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
