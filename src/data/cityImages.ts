/**
 * Local landmark photos — only assign a photo when it actually depicts that place
 * (or a shared lake/lifestyle shot that is not a labeled downtown landmark).
 */
export const cityImages: Record<string, string> = {
  // Exact local matches
  'flower-mound': '/images/local/01-lakeside.jpg', // Lakeside DFW clock tower / canal
  'grapevine': '/images/local/04-grapevine-main.jpg', // Main Street / Oak St
  'bartonville': '/images/local/05-plaza.jpg', // Marty B's plaza

  // Shared lake-shore lifestyle (not a labeled downtown)
  'highland-village': '/images/local/03-lake-rocks.jpg',
  'copper-canyon': '/images/local/03-lake-rocks.jpg',
  'double-oak': '/images/local/06-waterfront.jpg',
  'lewisville': '/images/local/06-waterfront.jpg',
  'northlake': '/images/local/06-waterfront.jpg',
  'trophy-club': '/images/local/06-waterfront.jpg',
  'roanoke': '/images/local/06-waterfront.jpg',
  'euless': '/images/local/06-waterfront.jpg',
  'coppell': '/images/local/06-waterfront.jpg',
  'argyle-lantana': '/images/local/06-waterfront.jpg',
  'bedford': '/images/local/06-waterfront.jpg',
};

export const defaultCityImage = '/images/local/01-lakeside.jpg';
