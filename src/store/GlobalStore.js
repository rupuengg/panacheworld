export const defaultGlobalStore = {
  navigationMenu: [
    {
      title: 'Home',
      link: '/home',
      scrollTo: '',
      items: []
    },
    {
      title: 'About',
      link: '/about',
      scrollTo: '',
      items: []
    },
    {
      title: 'Services',
      link: '/services',
      scrollTo: '',
      items: [
        {
          title: 'All Services',
          link: '/services/all',
          scrollTo: '',
          items: []
        },
        {
          title: 'Residences interiors',
          link: '/services/residences',
          scrollTo: '',
          items: []
        },
        {
          title: 'Recreation Interiors',
          link: '/services/recreation',
          scrollTo: '',
          items: []
        },
        {
          title: 'Modular kitchen',
          link: '/services/modularkitchen',
          scrollTo: '',
          items: []
        },
        {
          title: 'living room interiors',
          link: '/services/livingroom',
          scrollTo: '',
          items: []
        },
      ]
    },
    {
      title: 'Location',
      link: '/location',
      scrollTo: '',
      items: []
    },
    {
      title: 'Projects',
      link: '/projects',
      scrollTo: '',
      items: []
    },
    {
      title: 'Contact',
      link: '/contact',
      scrollTo: '',
      items: []
    }
  ]
};

export default defaultGlobalStore;