export const site = {
  name: 'Diego Alvarado',
  brandSecondary: 'Alvarado Realty Group',
  title: 'Diego Alvarado | REALTOR® | Flower Mound & North DFW',
  description:
    'Diego Alvarado is a REALTOR® with Monument Realty serving Flower Mound, Coppell, Grapevine Lake communities, and North DFW suburbs. Buyer, seller, relocator, and investor representation. Hablo Español.',
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
  gaId: 'G-HV8H3GDDDZ',
  brokerage: 'Monument Realty',
  gbp: 'https://maps.app.goo.gl/RYobBs8dCmZNnQQbA?g_st=ac',
  wholesales: 'https://dfw-wholesales.netlify.app/',
  zillowReviews: 'https://www.zillow.com/profile/diegoealvarado/#reviews',
  social: {
    instagram: 'https://www.instagram.com/diegoalvarado_realtor/',
    facebook: 'https://www.facebook.com/p/Diego-Alvarado-Realtor-61559689857939/',
    linkedin: 'https://www.linkedin.com/in/alvarado',
  },
} as const;

/** Marketplace / profile links for the short "Find me" row (homepage + contact). */
export const findMeLinks = [
  {
    label: 'Google',
    href: 'https://www.google.com/maps/place/Diego+Alvarado+-+REALTOR%C2%AE/@32.9941467,-97.0626105,17z/data=!3m1!4b1!4m6!3m5!1s0x63696dfee702e495:0xb6b56e7d43e60cd9!8m2!3d32.9941467!4d-97.0626105',
  },
  {
    label: 'Zillow',
    href: 'https://www.zillow.com/profile/diegoealvarado?utm_source=website&utm_medium=referral&utm_campaign=find-me',
  },
  {
    label: 'Realtor.com',
    href: 'https://www.realtor.com/realestateagents/6641f028f0341889ee4d4f00?utm_source=website&utm_medium=referral&utm_campaign=find-me',
  },
  {
    label: 'Monument Realty',
    href: 'https://monumentrealtytx.com/agent/diego-alvarado?utm_source=website&utm_medium=referral&utm_campaign=find-me',
  },
  {
    label: 'BiggerPockets',
    href: 'https://www.biggerpockets.com/users/diegoa5?utm_source=website&utm_medium=referral&utm_campaign=find-me',
  },
] as const;

/** All service cities — treated equally for SEO and on-site IA (no core/other split). */
export const cities = [
  { slug: 'flower-mound', name: 'Flower Mound' },
  { slug: 'highland-village', name: 'Highland Village' },
  { slug: 'lewisville', name: 'Lewisville' },
  { slug: 'grapevine', name: 'Grapevine' },
  { slug: 'coppell', name: 'Coppell' },
  { slug: 'roanoke', name: 'Roanoke' },
  { slug: 'bartonville', name: 'Bartonville' },
  { slug: 'copper-canyon', name: 'Copper Canyon' },
  { slug: 'double-oak', name: 'Double Oak' },
  { slug: 'northlake', name: 'Northlake' },
  { slug: 'trophy-club', name: 'Trophy Club' },
  { slug: 'argyle-lantana', name: 'Argyle & Lantana' },
  { slug: 'bedford', name: 'Bedford' },
  { slug: 'euless', name: 'Euless' },
] as const;

/** @deprecated use `cities` — kept as aliases so older imports keep working during migration */
export const firstWaveCities = cities;
export const nextWaveCities = [] as const;
export const hubOnlyCities = [] as const;
