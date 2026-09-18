"use client";

import { useState } from "react";
import Cv from "./components/Cv";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlantHighlightsCarousel from "./components/PlantHighlightsCarousel";
import homeData from "./data/home.json";

export default function Home() {
  const basePath = "/LP-project-1";
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-background p-0">
        <Header title={homeData.header.title} />

        <section className="w-full">
          <Hero
            basePath={basePath}
            hero={homeData.hero}
            stats={homeData.stats}
            buttonText={homeData.buttons.findPlant}
            onOpenCv={() => setCvOpen(true)}
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

      {cvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="Close CV modal"
            onClick={() => setCvOpen(false)}
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px]"
          />

          <div className="relative z-10 w-full max-w-[760px] max-h-[88vh] overflow-y-auto rounded-[18px] bg-white p-2 shadow-2xl sm:p-3">
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={() => setCvOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
              >
                Close
              </button>
            </div>

            <Cv />
          </div>
        </div>
      )}
    </>
  );
}
