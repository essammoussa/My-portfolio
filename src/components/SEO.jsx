
import { useSEO } from "./useSEO";

export default function SEO({ title, description, canonical, noIndex }) {
  useSEO({ title, description, canonical, noIndex });
  return null; // renders nothing — only manages <head>
}