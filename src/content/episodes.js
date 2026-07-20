/**
 * EPISODE CONTENT — ADD NEW EPISODES HERE.
 * Increase CURRENT_EPISODE_NUMBER and add metadata to EPISODE_DETAILS.
 * Never change an existing episode number; the archive displays newest first.
 */
export const CURRENT_EPISODE_NUMBER = 33;
export const CHANNELS = {
  youtube: "https://www.youtube.com/@alexkagianaris",
  instagram: "https://www.instagram.com/alexkagianaris.esq/",
};
const EPISODE_DETAILS = {
  "033": { title: "The Latest Legal Audit", topic: "Latest Episode", summary: "Watch the newest Legal Audit episode for the contracts, leverage and business behind the headline.", url: CHANNELS.youtube },
};
const fallback = number => ({ number, title: `The Legal Audit — Episode ${number}`, topic: "Episode Archive", summary: "Watch this published Legal Audit episode and explore the legal and business forces behind the headline.", url: CHANNELS.youtube });
export const episodes = Array.from({ length: CURRENT_EPISODE_NUMBER }, (_, index) => {
  const number = String(CURRENT_EPISODE_NUMBER - index).padStart(3, "0");
  return { ...fallback(number), ...EPISODE_DETAILS[number], number };
});
