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
        sidebarDepth: 0,
        children: [
          ['start/install.md', 'Installation'],
          ['start/basics.md', 'Basics & Metadata'],
          ['start/create.md', 'Creating an instance'],
          ['start/api.consts.md', 'Runtime Constants'],
          ['start/api.query.md', 'State queries'],
          ['start/api.rpc.md', 'RPC calls'],
          ['start/api.query.subs.md', 'Query subscriptions'],
          ['start/api.query.multi.md', 'Multi queries'],
          ['start/api.query.other.md', 'Query extras'],
          ['start/api.tx.md', 'Transactions'],
          ['start/keyring.md', 'Keyring'],
          ['start/api.tx.subs.md', 'Transaction subscriptions'],
          ['start/api.tx.wrap.md', 'Complex transactions'],
          ['start/types.basics.md', 'Type basics'],
          ['start/types.extend.md', 'Extending types'],
          ['start/rpc.custom.md', 'Custom RPC'],
          ['start/types.create.md', 'Creating types'],
          ['start/typescript.md', 'TypeScript interfaces'],
          ['start/typescript.user.md', 'TypeScript user generated'],
          ['start/FAQ.md', 'FAQ']
        ]
      },
      {
        title: 'Examples (Promise API)',
        path: '/examples/promise/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['examples/promise/01_simple_connect/', 'Simple connect'],
          ['examples/promise/02_listen_to_blocks/', 'Listen to blocks'],
          ['examples/promise/03_listen_to_balance_change/', 'Listen to balance change'],
          ['examples/promise/04_unsubscribe/', 'Unsubscribe from listening'],
          ['examples/promise/05_read_storage/', 'Read chain state'],
          ['examples/promise/06_make_transfer/', 'Make a transfer'],
          ['examples/promise/08_system_events/', 'Display system events'],
          ['examples/promise/09_transfer_events/', 'Transaction with events'],
          ['examples/promise/10_upgrade_chain/', 'Upgrade via sudo'],
          ['examples/promise/90_typegen/', 'TypeScript augmentation']
        ]
      },
      {
        title: 'Substrate defaults',
        path: '/substrate/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['substrate/rpc.md', 'Substrate RPC'],
          ['substrate/constants.md', 'Constants'],
          ['substrate/storage.md', 'State storage'],
          ['substrate/extrinsics.md', 'Extrinsics'],
          ['substrate/events.md', 'System events'],
          ['substrate/errors.md', 'Errors']
        ]
      },
      ['/api/', '@polkadot/api'],
      ['/types/', '@polkadot/types'],
      '/CONTRIBUTING.md'
    ]
  }
};
