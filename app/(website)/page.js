import { getAllAuthors, getSettings } from "@/lib/sanity/client";

import Home from "./home";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Home settings={settings} authors={authors} />;
}

export const revalidate = 60;
