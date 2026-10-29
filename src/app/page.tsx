import { Backdrop, Hero, PremiumEq } from "@/views/home";

export default function Home() {
  return (
    <>
      <Backdrop />
      <main className="grow">
        <Hero />
        <PremiumEq />
      </main>
    </>
  );
}
