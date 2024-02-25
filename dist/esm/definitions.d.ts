export interface WallpaperPlugin {
    /**
     * Sets the device wallpaper to a specific image.
     * @param options the options containing the image details.
     */
    setWallpaper(options: WallpaperOptions): Promise<void>;
}
export interface WallpaperOptions {
    /**
     * The base64 data of the image.
     *
     */
    base64: string;
    /**
     * In which parts the wallpaper will be set.
     */
    type: "home" | "lock" | "both";
}
