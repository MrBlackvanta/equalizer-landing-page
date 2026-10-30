import { SITE_NAME } from "@/data";
import { Backdrop } from "@/views/home";
import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Nothing is playing at this address. Head back to tune your music on the home page.";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Page not found`,
  description,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <Backdrop />
      <main className="grow v-container py-16 md:pt-32">
        <p className="text-preset-4 font-bold">Error 404</p>
        <h1 className="mt-4 text-preset-1-mobile font-bold md:text-preset-1-tablet lg:text-preset-1">
          Page not found
        </h1>
        <p className="mt-10 max-w-126 text-preset-5 md:text-preset-4-tablet lg:text-preset-4">
          {description}
        </p>
        <Link
          href="/"
          className="mt-12 v-button bg-slate text-white hover:bg-cyan hover:text-slate md:w-75"
        >
          Back to the equalizer
        </Link>
      </main>
    </>
  );
}
