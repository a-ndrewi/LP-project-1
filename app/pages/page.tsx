import PlantHighlightsCarousel from "../components/PlantHighlightsCarousel"
import homeData from "../data/home.json"
import Header from "../components/Header"
import Hero from "../components/Hero"

export default function Home() {
  const basePath = "/LP-project-1"

  return (
    <main className="min-h-screen bg-background p-0">
      <head>
        <title>{homeData.header.title}</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </head>

      {/* Header */}
      <Header title={homeData.header.title} />

      {/* Hero */}
      <section className="w-full">
        <Hero
          basePath={basePath}
          hero={homeData.hero}
          stats={homeData.stats}
          buttonText={homeData.buttons.findPlant}
          />
      </section>

      {/* Plant highlights */}
      <section className="mt-5 flex flex-col items-center px-4 pb-8 sm:px-5 md:pl-5">
        <PlantHighlightsCarousel 
        basePath={basePath}
        items={homeData.plantHighlights} />
      </section>

      <footer>
          <div className="w-full bg-surface p-4 md:p-4 text-center">
            <p className="text-sm">{homeData.footer.text}</p>
          </div>
      </footer>
    </main>
  );
}