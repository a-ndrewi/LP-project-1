import Header from "./components/Header";
import Hero from "./components/Hero";
import PlantHighlightsCarousel from "./components/PlantHighlightsCarousel";
import homeData from "./data/home.json";

export default function Home() {
  const basePath = "/LP-project-1";

  return (
    <main className="min-h-screen bg-background p-0">
      <Header title={homeData.header.title} />

      <section className="w-full">
        <Hero
          basePath={basePath}
          hero={homeData.hero}
          stats={homeData.stats}
          buttonText={homeData.buttons.findPlant}
        />
      </section>

      <section className="mt-5 flex flex-col items-center px-4 pb-8 sm:px-5 md:pl-5">
        <PlantHighlightsCarousel
          basePath={basePath}
          items={homeData.plantHighlights}
        />
      </section>

      <footer>
        <div className="w-full bg-surface p-4 text-center md:p-4">
          <p className="text-sm">{homeData.footer.text}</p>
        </div>
      </footer>
    </main>
  );
}
