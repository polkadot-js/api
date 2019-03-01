module.exports = {
  base: '/api/',
  title: 'polkadot-js/api',
  description: 'API libraries and interfaces for communicating with Polkadot and Substrate nodes',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Polkadot/Substrate Apps', link: 'https://polkadot.js.org/apps/' },
      { text: 'Project family', link: 'https://polkadot.js.org/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference (this)', link: 'https://polkadot.js.org/api/' },
          { text: 'Utility Reference', link: 'https://polkadot.js.org/common/' },
          { text: 'UI Libs Reference', link: 'https://polkadot.js.org/ui/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/polkadot-js/api' }
    ],
    search: false,
    sidebar: [
      {
        title: 'Examples (Promise API)',
        path: '/examples/promise/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['examples/promise/01_simple_connect/', 'Simple connect'],
          ['examples/promise/02_listen_to_blocks/', 'Listen to blocks'],
          ['examples/promise/03_listen_to_balance_change/', 'Listen to balance change'],
          ['examples/promise/04_unsubscribe/', 'Unsubscribe from listening'],
          ['examples/promise/05_read_storage/', 'Read chain state'],
          ['examples/promise/06_make_transfer/', 'Make a transfer'],
          ['examples/promise/08_system_events/', 'Display system events'],
          ['examples/promise/09_transfer_events/', 'Transaction with events'],
          ['examples/promise/10_upgrade_chain/', 'Upgrade via sudo']
        ]
      },
      {
        title: 'Substrate interfaces',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['/METHODS_RPC.md', 'Substrate RPC'],
          ['/METHODS_STORAGE.md', 'State storage (defaults)'],
          ['/METHODS_EXTRINSICS.md', 'Extrinsics (defaults)'],
          ['/METHODS_EVENTS.md', 'System events (defaults)']
        ]
      },
      ['/api/', '@polkadot/api'],
      ['/types/', '@polkadot/types'],
      '/CONTRIBUTING.md'
    ]
  }
};
