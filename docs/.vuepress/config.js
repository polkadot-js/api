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
        title: 'Getting started',
        path: '/start/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['start/install.md', 'Installation'],
          ['start/basics.md', 'Basics & Metadata'],
          ['start/create.md', 'Creating an instance'],
          ['start/api.consts.md', 'Using constants'],
          ['start/api.query.md', 'Using queries'],
          ['start/api.rpc.md', 'RPC calls'],
          ['start/types.basics.md', 'Type basics'],
          ['start/types.extend.md', 'Type extension']
        ]
      },
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
        title: 'Substrate defaults',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['substrate/rpc.md', 'Substrate RPC'],
          ['substrate/constants.md', 'Constants'],
          ['substrate/storage.md', 'State storage'],
          ['substrate/extrinsics.md', 'Extrinsics'],
          ['substrate/events.md', 'System events']
        ]
      },
      ['/api/', '@polkadot/api'],
      ['/types/', '@polkadot/types'],
      '/CONTRIBUTING.md'
    ]
  }
};
