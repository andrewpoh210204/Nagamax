export default {
  // ------------------------------------
  // Registration
  // ------------------------------------
  // Overview page sidebar
  '/overview': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/overview' },
        { text: 'Getting Started', link: '/getting-started' }
      ]
    },
    {
      text: 'Quick Links',
      items: [
        { text: 'User Roles', link: '/roles/super-admin/overview' },
        { text: 'Dashboard', link: '/modules/dashboard/overview' },
        { text: 'Registration', link: '/registration/account-types' }
      ]
    }
  ],

  '/registration/': [
    {
      text: 'Registration',
      collapsible: true,
      items: [
        { text: 'Account Types', link: '/registration/account-types' },
        { text: 'Registration Flow', link: '/registration/flow' },
        { text: 'Login Setup', link: '/registration/login-setup' },
        { text: 'Common Issues', link: '/registration/issues' }
      ]
    }
  ],

  // ------------------------------------
  // Roles
  // ------------------------------------
  '/roles/': [
    {
      text: 'User Roles',
      collapsible: true,
      items: [
        { text: 'Super Admin', link: '/roles/super-admin/overview' },
        { text: 'Admin', link: '/roles/admin/overview' },
        { text: 'Dealer', link: '/roles/dealer/overview' },
        { text: 'Sales Agent', link: '/roles/sales-agent/overview' },
        { text: 'End User', link: '/roles/end-user/overview' }
      ]
    }
  ],

  // ------------------------------------
  // Modules
  // ------------------------------------
  '/modules/': [
    {
      text: 'Dashboard',
      collapsible: true,
      items: [
        { text: 'Overview', link: '/modules/dashboard/overview' }
      ]
    },
    {
      text: 'Sales Info',
      collapsible: true,
      items: [
        { text: 'Sales Information', link: '/modules/sales-info/sales-information' },
        { text: 'Debtor Aging', link: '/modules/sales-info/debtor-aging' },
        { text: 'Debtor Statement', link: '/modules/sales-info/debtor-statement' },
        { text: 'Monthly Sales Analysis', link: '/modules/sales-info/monthly-sales-analysis' }
      ]
    },
    {
      text: 'Dealer Module',
      collapsible: true,
      items: [
        { text: 'Dealers', link: '/modules/dealer/dealers' },
        { text: 'Sales Orders', link: '/modules/dealer/sales-orders' },
        { text: 'Warranty Records', link: '/modules/dealer/warranty-records' },
        { text: 'Service Records', link: '/modules/dealer/service-records' },
        { text: 'Dealer Redemptions', link: '/modules/dealer/dealer-redemptions' },
        { text: 'Dealer Points', link: '/modules/dealer/dealer-points' },
        { text: 'Dealer Point Transactions', link: '/modules/dealer/dealer-point-transactions' },
        { text: 'Dealer Summaries', link: '/modules/dealer/dealer-summaries' }
      ]
    },
    {
      text: 'User Module',
      collapsible: true,
      items: [
        { text: 'Users', link: '/modules/user/users' },
        { text: 'User Points', link: '/modules/user/user-points' },
        { text: 'User Point Transactions', link: '/modules/user/user-point-transactions' },
        { text: 'User Redemptions', link: '/modules/user/user-redemptions' },
        { text: 'Vehicles', link: '/modules/user/vehicles' }
      ]
    },
    {
      text: 'Catalog',
      collapsible: true,
      items: [
        { text: 'Redemption Items', link: '/modules/catalog/redemption-items' },
        { text: 'Redemption Categories', link: '/modules/catalog/redemption-categories' },
        { text: 'Inventory Items', link: '/modules/catalog/inventory-items' },
        { text: 'Inventory Categories', link: '/modules/catalog/inventory-categories' }
      ]
    },
    {
      text: 'Accounts',
      collapsible: true,
      items: [
        { text: 'Users', link: '/modules/accounts/users' },
        { text: 'Dealers', link: '/modules/accounts/dealers' },
        { text: 'Sales Agents', link: '/modules/accounts/sales-agents' },
        { text: 'Admins', link: '/modules/accounts/admins' }
      ]
    },
    {
      text: 'System',
      collapsible: true,
      items: [
        { text: 'Status', link: '/modules/system/status' },
        { text: 'Sync Logs', link: '/modules/system/sync-logs' },
        { text: 'Settings', link: '/modules/system/settings' }
      ]
    }
  ]
}
