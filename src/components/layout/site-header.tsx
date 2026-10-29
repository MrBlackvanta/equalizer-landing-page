import { Logo } from "@/components/icons";
import { SITE_NAME } from "@/data";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="v-container pt-16">
      <Link
        href="/"
        aria-label={`${SITE_NAME} home`}
        className="flex w-fit v-focus"
      >
        <Logo className="h-8 w-36" />
      </Link>
    </header>
  );
}
