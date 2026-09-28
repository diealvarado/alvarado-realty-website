/**
 * City photos: Diego's Google Drive uploads (2026-09-27), plus licensed photos
 * listed in public/images/cities/CREDITS.md.
 * Only assign a photo when it depicts that place or its true shared lake.
 */
export const cityImages: Record<string, string> = {
  'flower-mound': '/images/cities/flower-mound.jpg', // Flower Mound River Walk
  'highland-village': '/images/cities/highland-village.jpg', // aerial of Highland Village neighborhood
  'lewisville': '/images/cities/lewisville.jpg', // Mill Street, Old Town
  'grapevine': '/images/cities/grapevine.jpg', // Visitor Information Center, Main Street
  'coppell': '/images/cities/coppell.jpg', // Old Town Coppell aerial
  'roanoke': '/images/cities/roanoke.jpg', // Roanoke water tower
  'bartonville': '/images/cities/bartonville.jpg', // Town of Bartonville entrance sign
  'copper-canyon': '/images/cities/copper-canyon.jpg', // Old Alton Bridge
  'northlake': '/images/cities/northlake.jpg', // Pecan Square
  'trophy-club': '/images/cities/trophy-club.jpg', // Trophy Club clock tower
  'double-oak': '/images/cities/double-oak.jpg', // Double Oak Town Hall
  'argyle-lantana': '/images/cities/argyle-lantana.jpg', // Lantana aerial
  'bedford': '/images/cities/bedford.jpg', // Bedford water tower
  'euless': '/images/cities/euless.jpg', // Euless water tower
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
