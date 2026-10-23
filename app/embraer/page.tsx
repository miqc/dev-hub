import type { Metadata } from "next";
import { EmbraerPresentation } from "@/components/embraer-presentation";

export const metadata: Metadata = {
  title: "Micael Leal — Apresentação para a Embraer",
  description:
    "Apresentação de Micael Leal para a entrevista na Embraer: trajetória, stack, projetos e forma de trabalhar.",
};

export default function EmbraerPage() {
  return <EmbraerPresentation />;
}
