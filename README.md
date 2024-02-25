# wallpaper

A capacitor plugin for setting base64 images as wallpapers in android devices.

## Install

```bash
npm install wallpaper (not published but can be installed locally.)
npx cap sync
```

## API

<docgen-index>

* [`setWallpaper(...)`](#setwallpaper)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setWallpaper(...)

```typescript
setWallpaper(options: WallpaperOptions) => Promise<void>
```

Sets the device wallpaper to a specific image.

| Param         | Type                                                          | Description                               |
| ------------- | ------------------------------------------------------------- | ----------------------------------------- |
| **`options`** | <code><a href="#wallpaperoptions">WallpaperOptions</a></code> | the options containing the image details. |

--------------------


### Interfaces


#### WallpaperOptions

| Prop         | Type                                    | Description                               |
| ------------ | --------------------------------------- | ----------------------------------------- |
| **`base64`** | <code>string</code>                     | The base64 data of the image.             |
| **`type`**   | <code>'home' \| 'lock' \| 'both'</code> | In which parts the wallpaper will be set. |

</docgen-api>
