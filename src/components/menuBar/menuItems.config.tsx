import Icon from '@components/ui/icon/Icon';
import { MenuItem } from '@components/ui/menu/Menu.types';

const menuItemsConfig: MenuItem[] = [
  {
    label: <Icon name='appleLogo' className='h-full' />,
    content: [
      {
        label: 'About This Mac',
        onClick: () => {},
      },
      {
        label: 'System Preferences...',
        onClick: () => {},
      },
      {
        label: 'App Store...',
        onClick: () => {},
      },
      {
        label: 'Recent Items',
        onClick: () => {},
        isSeperate: true,
        details: {
          subContent: [
            { label: 'Applications', onClick: () => {} },
            { label: 'Documents', onClick: () => {} },
            { label: 'Servers', onClick: () => {} },
            { label: 'Clear Menu', onClick: () => {}, isSeperate: true },
          ],
        },
      },

      {
        label: 'Force Quit...',
        onClick: () => {},
        details: { shortcut: '⌥⌘Esc' },
      },

      { label: 'Sleep', onClick: () => {} },
      { label: 'Restart...', onClick: () => {} },
      { label: 'Shut Down...', onClick: () => {} },
      {
        label: 'Lock Screen',
        onClick: () => {},
        details: { shortcut: '⌃⌘Q' },
        isSeperate: true,
      },
      { label: 'Log Out...', onClick: () => {}, details: { shortcut: '⇧⌘Q' } },
    ],
  },
  {
    label: <span className='text-[15px] font-bold'>Finder</span>,
    content: [
      { label: 'About This Mac', onClick: () => {} },
      { label: 'System Preferences', onClick: () => {} },
      { label: 'App Store...', onClick: () => {}, isSeperate: true },
      { label: 'Recent Items', onClick: () => {} },
      { label: 'Force Quit...', onClick: () => {}, isSeperate: true },
      { label: 'Sleep', onClick: () => {} },
      { label: 'Restart', onClick: () => {} },
      { label: 'Shut Down', onClick: () => {} },
      { label: 'Log Out', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'File',
    content: [
      { label: 'New', onClick: () => {} },
      { label: 'Open', onClick: () => {} },
      { label: 'Save', onClick: () => {} },
      { label: 'Save As', onClick: () => {} },
      { label: 'Close', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'Edit',
    content: [
      { label: 'Undo', onClick: () => {} },
      { label: 'Redo', onClick: () => {} },
      { label: 'Cut', onClick: () => {}, isSeperate: true },
      { label: 'Copy', onClick: () => {} },
      { label: 'Paste', onClick: () => {} },
      { label: 'Select All', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'View',
    content: [
      { label: 'Zoom In', onClick: () => {} },
      { label: 'Zoom Out', onClick: () => {} },
      { label: 'Full Screen', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'Go',
    content: [
      { label: 'Back', onClick: () => {} },
      { label: 'Forward', onClick: () => {} },
      { label: 'Home', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'Window',
    content: [
      { label: 'Minimize', onClick: () => {} },
      { label: 'Zoom', onClick: () => {} },
      { label: 'Bring All to Front', onClick: () => {}, isSeperate: true },
    ],
  },
  {
    label: 'Help',
    content: [
      { label: 'Help', onClick: () => {} },
      { label: 'Report Issue', onClick: () => {} },
      { label: 'About', onClick: () => {}, isSeperate: true },
    ],
  },
];

export default menuItemsConfig;
