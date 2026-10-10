import type { Department } from "../types/department";

// House colors follow the club's requested Welcome Day concept.
// Update the descriptions or names if the official department wording differs.
export const departments: Department[] = [
  {
    name: "Development",
    house: "The Blue House",
    description: "Build digital experiences, solve problems, and turn ideas into working projects.",
    symbol: "⌘",
    textColor: "text-navy",
    borderColor: "border-navy",
    background: "bg-card",
  },
  {
    name: "Video Editing",
    house: "The Green House",
    description: "Shape stories through video, editing, rhythm, and visual storytelling.",
    symbol: "▶",
    textColor: "text-amber",
    borderColor: "border-forest",
    background: "bg-forest",
  },
  {
    name: "Design",
    house: "The Burgundy House",
    description: "Create visual identities and designs that communicate ideas clearly.",
    symbol: "✧",
    textColor: "text-gold",
    borderColor: "border-burgundy",
    background: "bg-burgundy",
  },
  {
    name: "Drawing",
    house: "The Golden House",
    description: "Explore illustration, sketching, and artistic ways to express ideas.",
    symbol: "✎",
    textColor: "text-gold",
    borderColor: "border-gold",
    background: "bg-section",
  },
];
