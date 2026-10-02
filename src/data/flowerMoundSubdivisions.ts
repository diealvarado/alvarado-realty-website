/** Approved Flower Mound subdivision master list (64). Exact names only. */
export type FmSubdivision = {
  name: string;
  slug: string;
  blurb: string;
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const entries: { name: string; blurb: string }[] = [
  {
    name: 'Bakers Branch',
    blurb:
      'A quieter Flower Mound pocket where everyday residential streets and nearby green corridors shape the day-to-day feel. Buyers often shortlist it when they want a settled neighborhood rhythm without a high-profile amenity brand.',
  },
  {
    name: 'Bella Lago',
    blurb:
      'Lake-adjacent living with a resort-leaning name and a lifestyle that leans outdoor. Confirm HOA rules, lake access details, and any flood or elevation notes for the exact lot.',
  },
  {
    name: 'Bradford Park',
    blurb:
      'Established subdivision living with a practical North DFW layout — parks, sidewalks, and a family-oriented street pattern. Condition and updates can vary home to home on the same block.',
  },
  {
    name: 'Bridlewood',
    blurb:
      'One of Flower Mound’s best-known golf communities, pairing fairway-adjacent homes with a polished master-planned feel. Expect HOA standards and a lifestyle that attracts both relocators and long-term owners.',
  },
  {
    name: 'Bridlewood Farms',
    blurb:
      'Adjacent to the Bridlewood brand with a more estate-leaning, open feel than the denser golf-core streets. Useful when you want Bridlewood-area prestige with a different lot character.',
  },
  {
    name: 'Chateau Du Lac',
    blurb:
      'A lake-corridor estate community known for larger homes and a more private residential setting. Tour with lake views, lot orientation, and maintenance expectations in mind.',
  },
  {
    name: 'Chaucer Estates',
    blurb:
      'Estate-oriented Flower Mound living with a quieter street presence than the town’s busiest master plans. Suits buyers comparing space, privacy, and long-term hold potential.',
  },
  {
    name: 'Chimney Rock',
    blurb:
      'A residential subdivision with a classic suburban street grid and nearby everyday amenities. Good comparison point when weighing Flower Mound’s mid-size HOA neighborhoods.',
  },
  {
    name: 'Churchill Crossing',
    blurb:
      'Family-scale homes and a neighborhood cadence built around parks and local roads rather than a single signature amenity. Compare commute paths toward FM 2499 and the lake corridors.',
  },
  {
    name: 'Creekside at Heritage Park',
    blurb:
      'Named for nearby green space, this pocket leans trail-and-park lifestyle within Flower Mound’s broader amenity network. Verify HOA coverage and any greenbelt or drainage easements by address.',
  },
  {
    name: 'Diamond Belle',
    blurb:
      'A smaller-name Flower Mound subdivision that still shows up in local searches. Focus on lot size, update level, and how the street feels at peak commute hours.',
  },
  {
    name: 'Dixon Estates',
    blurb:
      'Estate-leaning residential streets where privacy and lot character matter as much as the floor plan. Useful for buyers comparing acreage-adjacent feel inside the Flower Mound market.',
  },
  {
    name: 'Edgewood',
    blurb:
      'Established neighborhood living with a straightforward suburban product mix. Condition spreads are common — inspect and price against renovated comps on nearby streets.',
  },
  {
    name: 'Emerald Bay',
    blurb:
      'A lake-leaning name that often attracts lifestyle buyers shopping Flower Mound’s water-adjacent corridors. Confirm actual lake access, HOA amenities, and view premiums lot by lot.',
  },
  {
    name: 'Fallbrook',
    blurb:
      'A residential subdivision with a calm, everyday Flower Mound feel. Buyers often weigh it against nearby master-planned options when they want less amenity complexity.',
  },
  {
    name: 'Foxborough Hollow',
    blurb:
      'Quiet residential streets with a tucked-away character relative to Flower Mound’s busier retail corridors. A practical shortlist option for households prioritizing neighborhood calm.',
  },
  {
    name: 'Franklin Hills',
    blurb:
      'Hillside-adjacent naming hints at elevation and view variation across lots. Walk the specific street for drainage, driveway grade, and how the home sits relative to neighbors.',
  },
  {
    name: 'Furst Ranch',
    blurb:
      'Known locally for a more expansive, ranch-estate feel than dense master plans. Buyers comparing privacy, lot utility, and estate-style living often put it on the tour list.',
  },
  {
    name: 'Glenwick Estates',
    blurb:
      'One of Flower Mound’s frequently named estate communities — polished homes, HOA expectations, and a relocator-friendly presentation. Compare against Wellington and Bridlewood for lifestyle fit.',
  },
  {
    name: 'Grace Park',
    blurb:
      'Park-oriented subdivision living that emphasizes neighborhood green space and a family street pattern. Confirm which amenities are private HOA versus town parks nearby.',
  },
  {
    name: 'Grand Park Estates',
    blurb:
      'Estate-scale branding with a residential setting that leans spacious rather than dense. Useful when you want Flower Mound prestige without living inside a golf-core community.',
  },
  {
    name: 'Heritage West',
    blurb:
      'Part of Flower Mound’s broader Heritage-area conversation, with residential streets tied to parks and established neighborhood fabric. Tour for update level and HOA specifics.',
  },
  {
    name: 'Hidden Valley Country',
    blurb:
      'A more secluded residential name that signals quieter streets and a country-adjacent feel within the Flower Mound market. Confirm road access, lot coverage, and any HOA or septic details by property.',
  },
  {
    name: 'Highland Court',
    blurb:
      'Compact court-style living that can feel more intimate than large master plans. Check parking, guest access, and how the court sits relative to busier nearby roads.',
  },
  {
    name: 'Hillside of Flower Mound',
    blurb:
      'Elevation and hillside siting are the story — views and drainage both deserve a careful walk. Compare against flatter lake-corridor and master-planned options nearby.',
  },
  {
    name: 'Immel Estates Addition',
    blurb:
      'An estates-addition pocket where lot character and street context matter more than a branded amenity package. Good for buyers who prioritize space over golf or resort marketing.',
  },
  {
    name: 'Kensington Park Estates',
    blurb:
      'Estate-and-park naming that points to a polished residential setting. Expect HOA standards and a presentation that appeals to relocators comparing Flower Mound’s upper-tier pockets.',
  },
  {
    name: 'Ladera',
    blurb:
      'A newer-feel Flower Mound community name that often draws buyers shopping modern floor plans and HOA amenities. Confirm builder era, warranty status, and dues for the exact address.',
  },
  {
    name: 'Lake Forest',
    blurb:
      'Lake-corridor branding with a wooded residential character. Lifestyle value often hinges on how close you actually are to trails, water, and Grapevine Lake recreation.',
  },
  {
    name: 'Lakemont Addition',
    blurb:
      'An addition-style lake-area pocket — more about location and lot than a single master-plan amenity list. Verify flood, elevation, and lake-proximity claims property by property.',
  },
  {
    name: 'Lakeshore Terrace',
    blurb:
      'Shore-and-terrace naming for buyers chasing lake-adjacent living. Confirm shoreline access, view corridors, and any special assessments tied to the property.',
  },
  {
    name: 'Lakeside',
    blurb:
      'A straightforward lake-side search name within Flower Mound. Treat each listing as its own micro-market — water proximity premiums are not uniform across the community.',
  },
  {
    name: 'Lakeview Estates',
    blurb:
      'Estate homes with lake-view aspirations; actual views and elevations vary by lot. Pair the showing with a daylight visit so you can judge the view claim yourself.',
  },
  {
    name: 'Legends',
    blurb:
      'A Flower Mound subdivision name that appears in local buyer shortlists for established residential living. Focus on street condition, HOA rules, and commute fit rather than the brand alone.',
  },
  {
    name: 'Magnolia Park',
    blurb:
      'Park-forward neighborhood living with a softer, family-oriented feel. Compare green-space access against nearby master plans that package amenities inside the HOA.',
  },
  {
    name: 'Montalcino Estates',
    blurb:
      'Estate community living with a curated, upscale presentation. Relocators often compare it with Glenwick, Wellington, and lake-estate pockets when ranking Flower Mound options.',
  },
  {
    name: 'Oakbridge',
    blurb:
      'Tree-and-bridge naming that suggests a wooded residential setting. A practical mid-list option when you want Flower Mound without committing to a golf-core lifestyle.',
  },
  {
    name: 'Orchard Flower',
    blurb:
      'A Flower Mound community known for a more intentional, lifestyle-oriented presentation than generic subdivisions. Confirm product type (including any age-targeted or HOA-specific rules) for the address you are touring.',
  },
  {
    name: 'Pecan Acres',
    blurb:
      'Acreage-leaning character with a more open, pecan-country feel than dense HOA streets. Suits buyers comparing privacy and lot utility inside the broader Flower Mound search.',
  },
  {
    name: 'Pepper Creek Ranch',
    blurb:
      'Ranch-named living that often signals more open space and a less urban street pattern. Walk the property for creek, drainage, and fencing realities before you assume “ranch” means acreage.',
  },
  {
    name: 'Point Noble',
    blurb:
      'A lake-corridor estate name associated with Grapevine Lake–adjacent prestige. Expect lifestyle premiums tied to setting — confirm access, views, and HOA details by lot.',
  },
  {
    name: 'River Oaks',
    blurb:
      'Established residential branding with a settled Flower Mound street feel. Compare update level and lot size against other mid-to-upper neighborhood options nearby.',
  },
  {
    name: 'Rustic Timbers',
    blurb:
      'Wooded, rustic-leaning character that appeals to buyers who want tree canopy and a quieter natural setting. Check lot clearing, drainage, and HOA landscape rules carefully.',
  },
  {
    name: 'Saddle Oaks',
    blurb:
      'One of Flower Mound’s frequently featured communities — polished homes, HOA structure, and strong relocator recognition. Often compared with Bridlewood and Wellington on lifestyle and presentation.',
  },
  {
    name: 'Saddlewood',
    blurb:
      'Adjacent in name to the Saddle Oaks conversation but its own street-level market. Tour both if you like the Saddle-area brand and want to compare product and pricing feel.',
  },
  {
    name: 'Sanctuary',
    blurb:
      'A quieter-branded Flower Mound pocket that emphasizes residential calm over retail or golf marketing. Useful when privacy and a settled street are the priority.',
  },
  {
    name: 'Stafford Estates',
    blurb:
      'Estate-oriented subdivision living with a polished residential presentation. Compare lot size, HOA expectations, and commute paths against other Flower Mound estate names.',
  },
  {
    name: 'Stone Creek Addition',
    blurb:
      'An addition-style community with a creek-adjacent name and everyday suburban product. Verify drainage easements and how the creek corridor affects the specific lot.',
  },
  {
    name: 'Stone Hill Farms',
    blurb:
      'Farm-and-hill branding that often attracts buyers seeking a more open, less dense Flower Mound feel. Confirm actual lot size and any agricultural or HOA use limits.',
  },
  {
    name: 'Sunset Point at Twin Coves',
    blurb:
      'Part of the Twin Coves lake corridor — lifestyle buyers shortlist it for Grapevine Lake proximity and sunset-facing orientation potential. Confirm cove access and view claims on-site.',
  },
  {
    name: 'Terracina',
    blurb:
      'A Flower Mound community name with a more curated residential feel. Compare floor plans, HOA amenities, and street energy against nearby master-planned and estate options.',
  },
  {
    name: 'The Landing',
    blurb:
      'Landing-named living that often sits in the lake-and-recreation conversation. Confirm what “landing” means for that address — trail access, marina adjacency, or simply branding.',
  },
  {
    name: 'The Oaks of Shadow Ridge',
    blurb:
      'Oak-canopy residential living with a ridge-oriented name. Walk for tree coverage, lot privacy, and how the ridge sits relative to wind and drainage.',
  },
  {
    name: 'The Peninsula at Twin Coves',
    blurb:
      'Peninsula positioning on the Twin Coves side of Grapevine Lake — a lifestyle premium community for water-oriented buyers. Verify cove frontage, access rights, and any special assessments.',
  },
  {
    name: 'The River Walk at Central Park',
    blurb:
      'One of Flower Mound’s featured lifestyle communities near the Central Park amenity zone — walkable energy, town-center adjacency, and a denser product mix than estate acreage. Strong relocator shortlist name.',
  },
  {
    name: 'The Villages of Northshore',
    blurb:
      'Northshore village-style living tied to Flower Mound’s lake-north residential fabric. Compare village sections for product type, HOA scope, and how close you sit to water recreation.',
  },
  {
    name: 'Tinley Park',
    blurb:
      'Park-named subdivision living with a practical family-neighborhood feel. A solid comparison point when you want Flower Mound amenities without a golf-community premium.',
  },
  {
    name: 'Tour 18',
    blurb:
      'Golf-centric living built around the Tour 18 course experience. Buyers who want fairway lifestyle and a distinctive golf brand often put it beside Bridlewood in the comparison set.',
  },
  {
    name: 'Town Lake at Flower Mound',
    blurb:
      'A featured Flower Mound community with town-lake lifestyle branding and a more amenity-forward presentation. Popular with relocators comparing lake-adjacent living inside town limits.',
  },
  {
    name: 'Trailwood',
    blurb:
      'Trail-oriented naming that aligns with Flower Mound’s broader parks-and-paths identity. Confirm which trails are HOA-private versus town-maintained near the home.',
  },
  {
    name: 'Vilamoura',
    blurb:
      'A distinctive Flower Mound community name with a more curated residential presentation. Tour for product type, HOA structure, and how it compares to nearby estate and master-plan options.',
  },
  {
    name: 'Villas at Southgate',
    blurb:
      'One of the core seven featured names — villa-style living with a lower-maintenance footprint than large estate lots. Fits buyers who want Flower Mound location without full-yard upkeep.',
  },
  {
    name: 'Wellington',
    blurb:
      'A flagship Flower Mound master-planned community with strong relocator recognition, amenity packaging, and a polished streetscape. Frequently compared with Bridlewood and Saddle Oaks.',
  },
  {
    name: 'Wichita Creek',
    blurb:
      'Creek-corridor residential living on Flower Mound’s quieter edges. Check drainage, greenbelt easements, and how the creek setting affects usable yard space.',
  },
];

export const flowerMoundSubdivisions: FmSubdivision[] = entries.map((e) => ({
  name: e.name,
  slug: slugify(e.name),
  blurb: e.blurb,
}));

export const featuredFlowerMoundSubdivisions = [
  'Bridlewood',
  'Saddle Oaks',
  'Wellington',
  'Glenwick Estates',
  'The River Walk at Central Park',
  'Town Lake at Flower Mound',
  'Villas at Southgate',
] as const;
