export const site = {
  name: 'Diego Alvarado',
  brandSecondary: 'Alvarado Realty Group',
  title: 'Diego Alvarado | REALTOR® | Flower Mound & North DFW',
  description:
    'Diego Alvarado is a REALTOR® with Monument Realty serving Flower Mound, Grapevine Lake communities, and North DFW suburbs. Buyer, seller, relocator, and investor representation. Hablo Español.',
  url: 'https://alvaradorealtygroup.com',
  phone: '(214) 833-8911',
  phoneHref: 'tel:+12148338911',
  email: 'diego@alvaradorealtygroup.com',
  address: {
    street: '870 International Pkwy Ste 280',
    city: 'Flower Mound',
    state: 'TX',
    zip: '75022',
    full: '870 International Pkwy Ste 280, Flower Mound, TX 75022',
  },
  license: '822481',
  brokerage: 'Monument Realty',
  gbp: 'https://maps.app.goo.gl/RYobBs8dCmZNnQQbA?g_st=ac',
  zillowReviews: 'https://www.zillow.com/profile/diegoealvarado/#reviews',
  social: {
    instagram: 'https://www.instagram.com/diegoalvarado_realtor/',
    facebook: 'https://www.facebook.com/p/Diego-Alvarado-Realtor-61559689857939/',
  },
} as const;

export const firstWaveCities = [
  { slug: 'flower-mound', name: 'Flower Mound' },
  { slug: 'highland-village', name: 'Highland Village' },
  { slug: 'lewisville', name: 'Lewisville' },
  { slug: 'grapevine', name: 'Grapevine' },
] as const;

export const nextWaveCities = [
  { slug: 'trophy-club', name: 'Trophy Club' },
  { slug: 'roanoke', name: 'Roanoke' },
  { slug: 'argyle-lantana', name: 'Argyle & Lantana' },
  { slug: 'bedford', name: 'Bedford' },
  { slug: 'euless', name: 'Euless' },
] as const;

export const hubOnlyCities = [
  { slug: 'southlake', name: 'Southlake' },
  { slug: 'colleyville', name: 'Colleyville' },
] as const;
