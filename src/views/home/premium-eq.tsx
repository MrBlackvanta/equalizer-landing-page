import illustration2x from "@/assets/illustration-app-2x.webp";
import illustration from "@/assets/illustration-app.webp";
import { AndroidIcon, AppleIcon } from "@/components/icons";
import CardPattern from "./card-pattern";

export default function PremiumEq() {
  return (
    <section
      aria-labelledby="premium-eq-heading"
      className="mt-27.5 md:mt-0 md:v-container md:py-50"
    >
      <div className="relative grid bg-slate md:min-h-150 md:grid-cols-2 md:rounded-xl md:pr-16 lg:gap-8">
        <CardPattern className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 lg:left-92" />
        <img
          src={illustration.src}
          srcSet={`${illustration.src} 1x, ${illustration2x.src} 2x`}
          width={illustration.width}
          height={illustration.height}
          alt="The equalizer app boosting treble by 10 dB"
          fetchPriority="high"
          className="relative -mt-27.5 mb-15 w-52 justify-self-center md:-mt-28 md:-mr-12 md:mb-0 md:w-67.5 md:self-start lg:-mt-30 lg:mr-0 lg:w-78"
        />
        <div className="relative bg-orange px-5 pt-12 pb-28 md:-mb-28 md:-ml-12 md:self-end md:rounded-2xl md:p-12 lg:-mb-30 lg:ml-0 lg:p-14">
          <h2 id="premium-eq-heading" className="text-preset-3 font-bold">
            Premium EQ
          </h2>
          <p className="mt-6 text-preset-5 md:text-preset-4-tablet lg:text-preset-4">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <p className="mt-10 flex items-center gap-4 text-preset-4">
            <span className="text-preset-2 font-bold">$4</span>{" "}
            <span>/ month</span>
          </p>
          <div className="mt-12 grid gap-4">
            <a
              href="https://www.apple.com/app-store/"
              className="v-button bg-slate text-white hover:bg-cyan hover:text-slate"
            >
              <AppleIcon />
              iOS Download
            </a>
            <a
              href="https://play.google.com/store/apps"
              className="v-button bg-white hover:bg-yellow"
            >
              <AndroidIcon />
              Android Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
