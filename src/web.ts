import { WebPlugin } from '@capacitor/core';
import type { WallpaperPlugin, WallpaperOptions } from './definitions';


export class WallpaperWeb extends WebPlugin implements WallpaperPlugin {
    async setWallpaper(options: WallpaperOptions): Promise<void> {
        console.log(options);
        throw new Error("This plugin doesn't support the browser.");
    }
}
