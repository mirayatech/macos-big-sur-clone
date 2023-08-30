import { MdCircle, MdOutlineClose, MdMinimize, MdCode } from "react-icons/md";
import {
  Images,
  Modal,
  Wallpapers,
  Image,
  Themes,
  Title,
  Buttons,
} from "./Style";
import { themes, wallpapers } from "../../library/constant";
import { useSettingStore } from "../../library/useSettingStore";
import { useWallpaper } from "../../library/useWallpaperStore";
import { useThemeStore } from "../../library/useThemeStore";

export function Setting() {
  const { setSettingOpen } = useSettingStore();
  const { setWallpaper } = useWallpaper();
  const { setThemeColor } = useThemeStore();

  return (
    <Modal>
      <Buttons>
        <span onClick={() => setSettingOpen(false)}>
          <MdOutlineClose />
          <MdCircle />
        </span>
        <span>
          <MdMinimize />
          <MdCircle />
        </span>

        <span>
          <MdCode />
          <MdCircle />
        </span>
      </Buttons>
      <Title>System Preference</Title>

      <Themes>
        <h2>Themes</h2>
        <Images>
          {themes.map((theme) => (
            <Image key={theme.name} onClick={() => setThemeColor(theme.name)}>
              <img src={theme.thumbnail} alt="" />

              <span>{theme.name}</span>
            </Image>
          ))}
        </Images>
      </Themes>
      <Wallpapers>
        <h2>Wallpapers</h2>
        <Images>
          {wallpapers.map((wallpaper) => (
            <Image key={wallpaper.name}>
              <img
                src={wallpaper.url}
                alt=""
                onClick={() => setWallpaper(wallpaper.url)}
              />

              <span>{wallpaper.name}</span>
            </Image>
          ))}
        </Images>
      </Wallpapers>
    </Modal>
  );
}
