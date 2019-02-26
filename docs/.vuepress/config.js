module.exports = {
  base: '/api/',
  title: 'polkadot-js/api',
  description: 'API libraries and interfaces for communicating with Polkadot and Substrate nodes',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'GitHub', link: 'https://github.com/polkadot-js/api' }
    ],
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
        sidebarDepth: 1,
        children: [
          ['/METHODS_RPC.md', 'RPC endpoints'],
          ['/METHODS_STORAGE.md', 'Substrate state'],
          ['/METHODS_EXTRINSICS.md', 'Substrate extrinsics'],
          ['/METHODS_EVENTS.md', 'Substrate events']
        ]
      },
      ['/api/', '@polkadot/api'],
      '/CONTRIBUTING.md'
    ]
  }
};
