import { Backdrop, Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <Backdrop />
      <main className="grow">
        <Hero />
      </main>
    </>
  );
}
