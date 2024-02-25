import { registerPlugin } from '@capacitor/core';
const Wallpaper = registerPlugin('Wallpaper', {
    web: () => import('./web').then(m => new m.WallpaperWeb()),
});
export * from './definitions';
export { Wallpaper };
//# sourceMappingURL=index.js.map