package com.konstantinospetrakis.plugins.wallpaper;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;


@CapacitorPlugin(name = "Wallpaper")
public class WallpaperPlugin extends Plugin {
    private Wallpaper implementation = new Wallpaper();

    @PluginMethod
    public void setWallpaper(PluginCall call) {
        try {
            String base64 = call.getString("base64");
            String type = call.getString("type");
            byte[] decodedString = Base64.decode(base64, Base64.DEFAULT);
            Bitmap decodedBytes = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
            WallpaperManager wallpaperManager = WallpaperManager.getInstance(this.getActivity().getApplicationContext() );
            
            if (type.equals("home")) 
                wallpaperManager.setBitmap(decodedBytes, null, false, WallpaperManager.FLAG_SYSTEM);
            else if (type.equals("lock"))
                wallpaperManager.setBitmap(decodedBytes, null, false, WallpaperManager.FLAG_LOCK);
            else
                wallpaperManager.setBitmap(decodedBytes);
            call.resolve();
    }
        catch (Exception e) {
            e.printStackTrace();
            call.reject(e.getMessage());
        }
    }
}