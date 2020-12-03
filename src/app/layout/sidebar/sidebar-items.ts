import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  //main dashboard
  {
    path: '/dashboard/main',
    title: 'Dashboard',
    icon: 'fas fa-tachometer-alt',
    class: '',
    submenu: []
  },
  {
    path: '/order/main',
    title: 'Orders',
    icon: 'fab fa-first-order',
    class: '',
    submenu: []
  },
  
  //inventory for store, new product, bulk product delete, best selling product, categories
  {
    path: '',
    title: 'Inventory',
    icon: 'fas fa-store',
    class: 'menu-toggle',
    submenu: [
      {
        path: '/store/inventory',
        title: 'My Store',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/store/new-product',
        title: 'Add New Product',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/store/bulk-delete',
        title: 'Bulk Delete Product',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/store/best-product',
        title: 'Best Selling Products',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/category/main',
        title: 'Categories',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
    ]
  },
  //restrictions for category, keywords, brand pool, product pool
  {
    path: '',
    title: 'Restrictions',
    icon: 'fas fa-window-close',
    class: 'menu-toggle',
    submenu: [
      {
        path: '/category/black-list',
        title: 'Categories Black Lists',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/store/restricted',
        title: 'Keywords Black Lists',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/category/brand-pool',
        title: 'Common Brand Pool',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
      {
        path: '/category/product-pool',
        title: 'Common Product Pool',
        icon: '',
        class: 'ml-menu',
        submenu: []
      },
    ]
  },
  {
    path : '',
    title : 'My Account',
    icon : 'fas fa-user',
    class : 'menu-toggle',
    submenu : [
      {
        path : '/account/profile',
        title : 'My Account & My Store Info',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/preference',
        title : 'My Store Preference',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/bills',
        title : 'My Bills',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/notification',
        title : 'My Notification',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/filter',
        title : 'My Filters',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/prices',
        title : 'My Price Table',
        icon : '',
        class : 'ml-menu',
        submenu : []
      },
      {
        path : '/account/mws',
        title : 'My MWS Information',
        icon : '',
        class : 'ml-menu',
        submenu : []
      }
    ]
  },
  {
    path : '/help/main',
    title : 'Help',
    icon : 'fab fa-hire-a-helper',
    class : '',
    submenu : []
  }
];
