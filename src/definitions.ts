export interface WallpaperPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
