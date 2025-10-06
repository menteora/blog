export const SITE = {
  website: "https://assolutamenteinutile.it/", // replace this with your deployed domain
  author: "Luca D'Amico",
  profile: "https://assolutamenteinutile.it/",
  desc: "Un altro sito assolutamente inutile",
  title: "AssolutamenteInutile.it",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/menteora/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "it", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Rome", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
