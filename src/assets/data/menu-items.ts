import type { MenuItemType } from '@/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'menu',
    label: 'MENU',
    isTitle: true,
  },
  {
    key: 'dashboard',
    icon: 'solar:home-2-broken',
    label: 'Dashboard',
    badge: {
      text: '9+',
      variant: 'success',
    },
    url: '/dashboard/analytics',
  },
  {
    key: 'apps',
    label: 'APPS',
    isTitle: true,
  },
  {
    key: 'apps-chat',
    icon: 'solar:chat-round-call-broken',
    label: 'Chat',
    url: '/apps/chat',
  },
  // EMAIL - Commenté pour réutilisation future
  // {
  //   key: 'apps-email',
  //   icon: 'solar:letter-broken',
  //   label: 'Email',
  //   url: '/apps/email',
  // },
  // CALENDAR - Commenté pour réutilisation future
  // {
  //   key: 'apps-calendar',
  //   icon: 'solar:calendar-broken',
  //   label: 'Calendar',
  //   children: [
  //     {
  //       key: 'calendar-schedule',
  //       label: 'Schedule',
  //       url: '/calendar/schedule',
  //       parentKey: 'apps-calendar',
  //     },
  //     {
  //       key: 'calendar-integration',
  //       label: 'Integration',
  //       url: '/calendar/integration',
  //       parentKey: 'apps-calendar',
  //     },
  //   ],
  // },
  // TODO - Commenté pour réutilisation future
  // {
  //   key: 'apps-todo',
  //   icon: 'solar:list-heart-minimalistic-broken',
  //   label: 'Todo',
  //   url: '/apps/todo',
  // },

  // INVOICES - Commenté pour réutilisation future
  // {
  //   key: 'apps-invoices',
  //   icon: 'solar:bill-list-broken',
  //   label: 'Invoices',
  //   children: [
  //     {
  //       key: 'invoices',
  //       label: 'Invoices',
  //       url: '/invoices',
  //       parentKey: 'apps-invoices',
  //     },
  //     {
  //       key: 'invoices-details',
  //       label: 'Invoices Details',
  //       url: '/invoices/RB6985',
  //       parentKey: 'apps-invoices',
  //     },
  //   ],
  // },
  {
    key: 'custom',
    label: 'Custom',
    isTitle: true,
  },
  {
    key: 'pages',
    label: 'Pages',
    isTitle: false,
    icon: 'solar:folder-with-files-broken',
    children: [
      {
        key: 'page-welcome',
        label: 'Welcome',
        url: '/pages/welcome',
        parentKey: 'pages',
      },
      {
        key: 'page-faqs',
        label: 'FAQs',
        url: '/pages/faqs',
        parentKey: 'pages',
      },
      {
        key: 'page-coming-soon',
        label: 'Coming Soon',
        url: '/coming-soon',
        parentKey: 'pages',
        target: '_blank',
      },
      {
        key: 'page-timeline',
        label: 'Timeline',
        url: '/pages/timeline',
        parentKey: 'pages',
      },
      {
        key: 'page-pricing',
        label: 'Pricing',
        url: '/pages/pricing',
        parentKey: 'pages',
      },
      {
        key: 'page-maintenance',
        label: 'Maintenance',
        url: '/maintenance',
        parentKey: 'pages',
        target: '_blank',
      },
      {
        key: 'page-404-error',
        label: '404 Error',
        url: '/error-404',
        parentKey: 'pages',
        target: '_blank',
      },
      {
        key: 'page-error-404-alt',
        label: 'Error 404 Alt',
        url: '/pages/error-404-alt',
        parentKey: 'pages',
      },
    ],
  },
  // AUTHENTICATION - Commenté pour réutilisation future
  // {
  //   key: 'page-authentication',
  //   label: 'Authentication',
  //   isTitle: false,
  //   icon: 'solar:lock-password-unlocked-broken',
  //   children: [
  //     {
  //       key: 'sign-in',
  //       label: 'Sign In',
  //       url: '/auth/sign-in',
  //       parentKey: 'page-authentication',
  //     },
  //     {
  //       key: 'signup',
  //       label: 'Sign Up',
  //       url: '/auth/sign-up',
  //       parentKey: 'page-authentication',
  //     },
  //     {
  //       key: 'reset-pass',
  //       label: 'Reset Password',
  //       url: '/auth/reset-pass',
  //       parentKey: 'page-authentication',
  //     },
  //     {
  //       key: 'lock-screen',
  //       label: 'Lock Screen',
  //       url: '/auth/lock-screen',
  //       parentKey: 'page-authentication',
  //     },
  //   ],
  // },
  // WIDGETS - Commenté pour réutilisation future
  // {
  //   key: 'widgets',
  //   icon: 'solar:gift-broken',
  //   label: 'Widgets',
  //   badge: {
  //     text: 'Hot',
  //     variant: 'danger',
  //   },
  //   url: '/widgets',
  // },

  // SECTION COMPONENTS COMPLÈTE - Commentée pour réutilisation future
  // Contient: Base UI, Advanced UI, Charts, Forms, Tables, Icons

  // MAPS - Commenté pour réutilisation future
  // {
  //   key: 'maps',
  //   icon: 'solar:streets-map-point-broken',
  //   label: 'Maps',
  //   children: [
  //     {
  //       key: 'maps-google',
  //       label: 'Google Maps',
  //       url: '/maps/google',
  //       parentKey: 'maps',
  //     },
  //     {
  //       key: 'maps-vector',
  //       label: 'Vector Maps',
  //       url: '/maps/vector',
  //       parentKey: 'maps',
  //     },
  //   ],
  // },
  // BADGE MENU - Commenté pour réutilisation future
  // {
  //   key: 'badge-menu',
  //   icon: 'solar:football-broken',
  //   label: 'Badge Menu',
  //   badge: {
  //     text: '1',
  //     variant: 'primary',
  //   },
  // },
  // MENU ITEM - Commenté pour réutilisation future
  // {
  //   key: 'menuitem',
  //   icon: 'solar:share-broken',
  //   label: 'Menu Item',
  //   children: [
  //     {
  //       key: 'menu-item-1',
  //       label: 'Menu Item 1',
  //       parentKey: 'menuitem',
  //     },
  //     {
  //       key: 'menu-item-2',
  //       label: 'Menu Item 2',
  //       parentKey: 'menuitem',
  //       children: [
  //         {
  //           key: 'menu-sub-item',
  //           label: 'Menu Sub Item',
  //           parentKey: 'menu-item-2',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // DISABLED ITEM - Commenté pour réutilisation future
  // {
  //   key: 'disabled-item',
  //   icon: 'solar:dislike-broken',
  //   label: 'Disabled Item',
  //   isDisabled: true,
  // },
]
