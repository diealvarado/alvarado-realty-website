/** Per-city subdivision list (names only; wording from Diego-approved tickets). */
export type CitySubdivisions = {
  slug: string;
  city: string;
  title: string;
  h1: string;
  intro: string;
  /** One group per list; heading only when the ticket specifies sub-lists. */
  groups: { heading?: string; names: string[] }[];
};
