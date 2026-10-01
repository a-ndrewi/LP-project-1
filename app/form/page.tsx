import Link from "next/link";

const inputStyles = [
  {
    label: "Basic",
    placeholder: "What’s your full name?",
    className:
      "rounded-xl border border-transparent bg-black px-5 py-4 text-white placeholder:text-[#999]",
  },
  {
    label: "Basic Special",
    placeholder: "What’s your full name?",
    className:
      "rounded-xl border border-transparent bg-[#1d1e20] px-5 py-4 text-white placeholder:text-[#999]",
  },
  {
    label: "Material Outline",
    placeholder: "Full Name",
    className:
      "rounded-lg border border-[#414144] bg-transparent px-5 py-4 text-white placeholder:text-[#999]",
  },
  {
    label: "Material Fill",
    placeholder: "Full Name",
    className:
      "rounded-t-md border-b border-[#414144] bg-black px-4 py-4 text-white placeholder:text-[#999]",
  },
  {
    label: "Underline",
    placeholder: "Full Name",
    className:
      "border-b border-[#292a2c] bg-transparent px-1 py-4 text-white placeholder:text-[#999]",
  },
];

export default function FormPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#111214] px-6 py-12 text-white sm:px-10">
      <div className="mx-auto w-full max-w-[1080px]">
        <h1 className="sr-only">Form input styles</h1>

        <form className="space-y-8 sm:space-y-10">
          {inputStyles.map(({ label, placeholder, className }) => (
            <div
              key={label}
              className="grid grid-cols-1 items-center gap-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-5"
            >
              <label
                htmlFor={`input-${label.toLowerCase().replaceAll(" ", "-")}`}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#b5b5b7]"
              >
                {label}
              </label>
              <input
                id={`input-${label.toLowerCase().replaceAll(" ", "-")}`}
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder={placeholder}
                className={`form-style-input w-full text-sm font-semibold transition-colors duration-200 ${className}`}
              />
            </div>
          ))}
        </form>
      </div>

      <Link
        href="/"
        aria-label="Back to home"
        className="form-back-link fixed bottom-5 right-5 flex size-10 items-center justify-center rounded-full text-[#929294] transition-colors sm:bottom-7 sm:right-7"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 14 4 19l5 5" />
          <path d="M4 19h10a6 6 0 0 0 0-12h-1" />
        </svg>
      </Link>
    </main>
  );
}
