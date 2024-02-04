import Icon from '@components/ui/Icon';
import { MenuItem } from '@components/ui/menu/menu.types';

const menuItemsConfig: MenuItem[] = [
  {
    label: <Icon name='appleLogo' className='h-full' />,
    content: [
      {
        label: 'About This Mac',
        onClick: () => {},
      },
      'seperator',
      {
        label: 'System Preferences',
        onClick: () => {},
      },
      { label: 'App Store', onClick: () => {}, disabled: true },
      'seperator',
      { label: 'Recent Items', onClick: () => {} },
      'seperator',
      { label: 'Force Quit', onClick: () => {}, details: { shortcut: '⇧⌘Q' } },
      'seperator',
      { label: 'Sleep', onClick: () => {} },
      { label: 'Restart', onClick: () => {} },
      { label: 'Shut Down', onClick: () => {} },
      'seperator',
      { label: 'Lock Screen', onClick: () => {}, details: { shortcut: '^⌘Q' } },
      { label: 'Log Out', onClick: () => {}, details: { shortcut: '⇧⌘Q' } },
    ],
  },
  {
    label: <span className='text-[15px] font-bold'>Finder</span>,
    content: [
      { label: 'About This Mac', onClick: () => {} },
      { label: 'System Preferences', onClick: () => {} },
      'seperator',
      { label: 'App Store...', onClick: () => {} },
      { label: 'Recent Items', onClick: () => {} },
      'seperator',
      { label: 'Force Quit...', onClick: () => {} },
      { label: 'Sleep', onClick: () => {} },
      { label: 'Restart', onClick: () => {} },
      { label: 'Shut Down', onClick: () => {} },
      'seperator',
      { label: 'Log Out', onClick: () => {} },
    ],
  },
  {
    label: 'File',
    content: [
      { label: 'New', onClick: () => {} },
      { label: 'Open', onClick: () => {} },
      { label: 'Save', onClick: () => {} },
      { label: 'Save As', onClick: () => {} },
      'seperator',
      { label: 'Close', onClick: () => {} },
    ],
  },
  {
    label: 'Edit',
    content: [
      { label: 'Undo', onClick: () => {} },
      { label: 'Redo', onClick: () => {} },
      'seperator',
      { label: 'Cut', onClick: () => {} },
      { label: 'Copy', onClick: () => {} },
      { label: 'Paste', onClick: () => {} },
      'seperator',
      { label: 'Select All', onClick: () => {} },
    ],
  },
  {
    label: 'View',
    content: [
      { label: 'Zoom In', onClick: () => {} },
      { label: 'Zoom Out', onClick: () => {} },
      'seperator',
      { label: 'Full Screen', onClick: () => {} },
    ],
  },
  {
    label: 'Go',
    content: [
      { label: 'Back', onClick: () => {} },
      { label: 'Forward', onClick: () => {} },
      'seperator',
      { label: 'Home', onClick: () => {} },
    ],
  },
  {
    label: 'Window',
    content: [
      { label: 'Minimize', onClick: () => {} },
      { label: 'Zoom', onClick: () => {} },
      'seperator',
      { label: 'Bring All to Front', onClick: () => {} },
    ],
  },
  {
    label: 'Help',
    content: [
      { label: 'Help', onClick: () => {} },
      { label: 'Report Issue', onClick: () => {} },
      'seperator',
      { label: 'About', onClick: () => {} },
    ],
  },
];

export default menuItemsConfig;
