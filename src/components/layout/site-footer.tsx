import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "@/components/icons";
import Signature from "./signature";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramIcon,
  },
  { label: "Twitter", href: "https://twitter.com/", Icon: TwitterIcon },
];

export default function SiteFooter() {
  return (
    <footer className="relative grid gap-8 v-container pt-16 pb-20 md:grid-cols-[1fr_auto] md:items-center lg:grid-cols-[auto_1fr_auto] lg:gap-x-32">
      <Logo className="h-8 w-36 md:col-span-2 lg:col-span-1 lg:self-start" />
      <div>
        <p>All rights reserved © Equalizer 2021</p>
        <address className="not-italic">
          Have any problems? Contact us via social media or email us at{" "}
          <a
            href="mailto:equalizer@example.com"
            className="block w-fit font-bold v-focus"
          >
            equalizer@example.com
          </a>
        </address>
      </div>
      <ul className="flex items-center gap-8">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              className="flex v-focus hover:text-orange motion-safe:transition-colors motion-safe:duration-200"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
      <Signature />
    </footer>
  );
}
