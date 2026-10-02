/** Format insight pubDate as a calendar date in UTC so the day matches frontmatter. */
export function formatPubDate(date: Date, month: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month,
    day: 'numeric',
    timeZone: 'UTC',
  });
}
