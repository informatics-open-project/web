import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

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
          <Component {...pageProps} />
          <Analytics />
        </div>
      </AnimatePresence>
    </LazyMotion>
  );
}
