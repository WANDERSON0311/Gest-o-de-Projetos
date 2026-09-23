import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse — Gestão de Demandas",
  description: "Central de projetos, demandas, tarefas e produtividade."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}