import CornerPattern from "./corner-pattern";

export default function Backdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-1 overflow-clip">
      <div className="absolute -top-80 -left-57.25 size-160 v-glow-orange lg:-left-44.75" />
      <div className="absolute -top-70 -right-80 size-160 v-glow-cyan md:-top-6 md:-right-10 lg:right-2.5" />
      <div className="absolute -top-2.25 -right-80 size-160 v-glow-amber md:top-61.75 md:-right-10 lg:right-2.5" />
      <div className="absolute -right-76 bottom-40 hidden size-160 v-glow-orange md:block lg:-right-64 lg:bottom-24" />
      <CornerPattern className="absolute -top-10 -right-12.5 hidden h-100 w-auto md:block lg:right-0 lg:h-117" />
    </div>
  );
}
