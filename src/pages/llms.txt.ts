import type { APIRoute } from 'astro';
import { site, firstWaveCities, nextWaveCities, hubOnlyCities } from '../data/site';

export const GET: APIRoute = () => {
  const cities = [...firstWaveCities, ...nextWaveCities, ...hubOnlyCities].map((c) => c.name).join(', ');
  const body = `# ${site.name}
> REALTOR® with ${site.brokerage} serving Flower Mound and North DFW suburbs.

- Name: ${site.name}
- Brand: ${site.brandSecondary}
- License: TX #${site.license}
- Phone: ${site.phone}
- Email: ${site.email}
- Address: ${site.address.full}
- Languages: English, Spanish
- Areas: ${cities}
- Site: ${site.url}
- About: ${site.url}/about/
- Areas hub: ${site.url}/areas/
- Contact: ${site.url}/contact/
- AI facts: ${site.url}/ai-information/
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
