import { WebPlugin } from '@capacitor/core';
import type { WallpaperPlugin, WallpaperOptions } from './definitions';
export declare class WallpaperWeb extends WebPlugin implements WallpaperPlugin {
    setWallpaper(options: WallpaperOptions): Promise<void>;
}
