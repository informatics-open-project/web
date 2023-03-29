import "@/styles/globals.css";
import "@/styles/embla.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import NextProgress from "next-progress";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakartaSans",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        mode="wait"
      >
        <div className={`${jakartaSans.variable} font-serif`}>
          <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-blue-100" />
          <NextProgress />
          <Component {...pageProps} />
          <Analytics />
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
