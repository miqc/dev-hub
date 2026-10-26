import type { Metadata } from "next";
import { EmbraerDeck } from "@/components/embraer-deck";

export const metadata: Metadata = {
  title: "Slides — Etapa Dinâmica Embraer",
  description: "Deck de 3 minutos da apresentação para a Etapa Dinâmica 2027 da Embraer.",
};

export default function EmbraerSlidesPage() {
  return <EmbraerDeck />;
}
