import { WebPlugin } from '@capacitor/core';
export class WallpaperWeb extends WebPlugin {
    async setWallpaper(options) {
        console.log(options);
        throw new Error("This plugin doesn't support the browser.");
    }
}
//# sourceMappingURL=web.js.map