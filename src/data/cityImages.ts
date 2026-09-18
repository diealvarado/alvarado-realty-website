/**
 * Found licensed landmark photos (Wikimedia / Pexels / Flickr CC).
 * Only assign a photo when it depicts that place or its true shared lake.
 * Diego’s personal uploads are not used for city cards.
 */
export const cityImages: Record<string, string> = {
  'flower-mound': '/images/cities/flower-mound.jpg', // North Shore / lakeside trail
  'highland-village': '/images/cities/highland-village.jpg', // Lake Lewisville (not Grapevine Lake)
  'lewisville': '/images/cities/lewisville.jpg', // Old Town / W Main
  'grapevine': '/images/cities/grapevine.jpg', // Main Street Old Town
  'coppell': '/images/cities/coppell.jpg', // Grapevine Springs Park
  'roanoke': '/images/cities/roanoke.jpg', // Silver Spur / Old Town
  'bartonville': '/images/cities/bartonville.jpg', // horse-country character
  'copper-canyon': '/images/cities/copper-canyon.jpg', // Lewisville Lake community

  // No free landmark photo found yet — omit unique shot (fall back)
  // northlake, trophy-club, double-oak, argyle-lantana, bedford, euless
};

export const defaultCityImage = '/images/cities/flower-mound.jpg';

/** Homepage shows exactly these 8 cities with found photos */
export const featuredCitySlugs = [
  'flower-mound',
  'highland-village',
  'lewisville',
  'grapevine',
  'coppell',
  'roanoke',
  'bartonville',
  'copper-canyon',
] as const;
