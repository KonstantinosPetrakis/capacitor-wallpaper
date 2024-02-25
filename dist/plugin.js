var capacitorWallpaper = (function (exports, core) {
    'use strict';

    const Wallpaper = core.registerPlugin('Wallpaper', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.WallpaperWeb()),
    });

    class WallpaperWeb extends core.WebPlugin {
        async setWallpaper(options) {
            console.log(options);
            throw new Error("This plugin doesn't support the browser.");
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WallpaperWeb: WallpaperWeb
    });

    exports.Wallpaper = Wallpaper;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
