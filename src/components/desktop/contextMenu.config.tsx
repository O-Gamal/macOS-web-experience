import { MenuItemContent } from '@components/ui/menu/Menu.types';

const contextMenuItems: MenuItemContent[] = [
  {
    label: 'New Folder',
    onClick: () => {},
  },
  {
    label: 'Get Info',
    onClick: () => {},
    isSeperate: true,
  },
  {
    label: 'Change Wallpaper...',
    onClick: () => {},
  },
  {
    label: 'Edit Widgets...',
    onClick: () => {},
  },
  {
    label: 'Use Stacks',
    onClick: () => {},
    isSeperate: true,
  },
  {
    label: 'Sort By',
    onClick: () => {},
    details: {
      subContent: [
        { label: 'None', onClick: () => {} },
        { label: 'Snap to Grid', onClick: () => {}, isSeperate: true },
        { label: 'Name', onClick: () => {}, isSeperate: true },
        { label: 'Kind', onClick: () => {} },
        { label: 'Date Last Opened', onClick: () => {} },
        { label: 'Date Added', onClick: () => {} },
        { label: 'Date Modified', onClick: () => {} },
        { label: 'Date Created', onClick: () => {} },
        { label: 'Size', onClick: () => {} },
        { label: 'Tags', onClick: () => {} },
      ],
    },
  },
  {
    label: 'Show View Options',
    onClick: () => {},
  },
  {
    label: 'Import from iPhone',
    onClick: () => {},
    isSeperate: true,
    details: {
      subContent: [
        { label: "Omar's iPhone", disabled: true },
        { label: 'Take Photo', onClick: () => {} },
        { label: 'Scan Document', onClick: () => {} },
        { label: 'Add Sketch', onClick: () => {} },
      ],
    },
  },
];

export default contextMenuItems;
