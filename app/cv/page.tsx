import Link from "next/link";
import Home from "../page";
import Cv from "../components/Cv";

export default function CvPage() {
  return (
    <main className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90">
        <div className="scale-[1.02] blur-[2px] grayscale-[0.05]">
          <Home />
        </div>
      </div>

      <div className="inset-0 bg-white/10 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative z-10 flex h-full items-center justify-center overflow-hidden p-3 sm:p-6">
        <div className="cv-scroll-container cv-modal-card max-h-[88vh] w-full max-w-[980px] overflow-y-auto rounded-[18px] p-2 sm:p-3">
          <div className="mb-2 flex justify-end">
            <Link
              href="/"
              className="cv-close-button inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition"
            >
              Close
            </Link>
          </div>

          <Cv />
        </div>
      </div>
    </main>
  );
}
