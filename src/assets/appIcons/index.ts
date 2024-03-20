import appStore from './appStore.png';
import arc from './arc.png';
import email from './email.png';
import figma from './figma.png';
import finder from './finder.png';
import music from './music.png';
import notion from './notion.png';
import photos from './photos.png';
import preview from './preview.png';
import settings from './settings.png';
import slack from './slack.png';
import terminal from './terminal.png';
import trash from './trash.png';
import vsCode from './vsCode.png';
import warp from './warp.png';

const appIcons = {
  photos,
  appStore,
  finder,
  music,
  preview,
  email,
  vsCode,
  slack,
  terminal,
  settings,
  arc,
  notion,
  figma,
  warp,
  trash,
};

export default appIcons;
export type AppIconType = keyof typeof appIcons;
