import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../app/assets/css/globals.css";

import Header from "./components/header/Header";
import Container from "./components/container/Container";

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Projeto pessoal feito com o curso Fundamentos do Next.js pela Rocketseat",
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={robotoMono.className}>
        <Container>
          <Header />

          {children}
        </Container>
      </body>
    </html>
  );
}
