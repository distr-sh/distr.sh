export type NavigationLink = {
  title: string;
  value: string;
  children?: NavigationLink[];
  isMegaMenu?: boolean;
  megaMenuType?: string;
};

export const links: NavigationLink[] = [
  {
    title: 'Product',
    value: 'products',
    isMegaMenu: true,
    megaMenuType: 'products',
  },
  {
    title: 'Docs',
    value: '/docs/',
    isMegaMenu: true,
    megaMenuType: 'docs',
  },
  {
    title: 'Pricing',
    value: '/pricing/',
    isMegaMenu: true,
    megaMenuType: 'pricing',
  },
  {
    title: 'Resources',
    value: '/blog/',
    isMegaMenu: true,
    megaMenuType: 'resources',
  },
];
