/**
 * Rental self-tour (/rental-tour) settings.
 * The backend is a Google Apps Script web app (project "Rental Tours" in diego@alvaradorealtygroup.com),
 * deployed as Execute as: Me, Who has access: Anyone. Override the URL with PUBLIC_RENTAL_TOUR_API in Netlify
 * if the deployment ever changes.
 */
export const RENTAL_TOUR_API: string =
  import.meta.env.PUBLIC_RENTAL_TOUR_API ||
  'https://script.google.com/macros/s/AKfycbzvBw-Mvky3q1_qWc9VBpTWhqxPGG7_CSv2MwCQ2W2iWX_27G1KX-Sy8cqTUC0uNWf4/exec';

export const rentalTour = {
  textPhone: '214-833-8911',
  smsHref: 'sms:+12148338911',
  retentionDays: 30,
  minLeadHours: 6,
  /** Client-side resize before upload (keeps Apps Script payloads small). */
  maxImageSide: 1200,
  /** Selfie picked through the file input must have been taken within this many minutes. */
  selfieMaxAgeMinutes: 10,
} as const;
