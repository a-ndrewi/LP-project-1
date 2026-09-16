import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-0 pl-0 pr-5 pb-5 md:pt-0 md:pl-0 md:pr-6 md:pb-6">
      {/* Hero */}
      <section className="w-full">
        <div className="flex min-h-[650px] flex-col md:flex-row">
          {/* Left side */}
          <div className="flex w-full flex-col justify-center rounded-br-[340px] bg-[#f1f1f1] md:w-1/2 md:px-13 md:py-15">
            <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-[#303030]">
              Bring{" "} 
              <span className="text-[#437223]">GREEN</span> 
              {" "} to your home and make you feel {" "}
              <span className="text-[#437223]">BETTER</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#333333] font-poppins-custom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit.
            </p>

            {/* Stats */}
            <div className="mt-12 flex justify-start gap-14 md:gap-20">
              <div className="flex flex-col">
                <strong className="text-2xl font-bold text-[#333333]">124K+</strong>
                <div className="my-2 w-18 border-3 font-extrabold border-[#333333]"></div>
                <span className="mt-1 text-[#333333]">Lorem ipsum consectetur</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-2xl font-bold text-[#333333]">126</strong>
                <div className="my-2 w-18 border-3 font-extrabold border-[#333333]"></div>
                <span className="mt-1 text-[#333333]">Lorem ipsum consectetur</span>
              </div>

              <div className="flex flex-col">
                <strong className="text-2xl font-bold text-[#333333]">78K</strong>
                <div className="my-2 w-18 border-3 font-extrabold border-[#333333]"></div>
                <span className="mt-1 text-[#333333]">Lorem ipsum consectetur</span>
              </div>
            </div>

            <button
            type="button"
            className="mt-5 w-fit rounded-full bg-[#437223] text-white text-lg px-15 py-4 hover:bg-[#36591b] transition-colors duration-300 font-bold">Find your plant</button>
          </div>

          {/* Right side */}
          <div className="relative flex w-full items-end justify-center bg-white pt-8 md:w-1/2 md:pt-0">
            <div className="absolute right-10 top-10 flex h-26 w-26 items-center justify-center rounded-full border border-[#303030]">
              <Image
                src="/images/Font circle.png"
                alt="Heart Icon"
                width={40}
                height={40}
                className="h-25 w-25"
              />
            </div>
            <div className="w-full max-w-[600px] md:max-w-[680px] lg:max-w-[760px]">
              <Image
                src="/images/plants-4-removebg-preview.png"
                alt="Plant"
                width={850}
                height={850}
                priority
                className="h-auto w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plant highlights */}
      <section className="mt-5 pb-8 pl-5 md:pl-5 flex flex-col items-center">
        <div className="grid max-w-[1320px] grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="flex min-h-[110px] items-center gap-6 rounded-[16px] border border-[#303030] px-6">

            {/* Cercul + planta */}
            <div className="relative h-30 w-30 shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#eeeeee]" />

              <Image
                src="/images/plant-1-removebg-preview.png"
                alt="Plant"
                width={50}
                height={50}
                className="relative left-5 top-0 z-10 h-30 w-20 object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-sm leading-6 text-[#404040]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus.
            </p>

          </div>

          {/* Card 2 */}
          <div className="flex min-h-[110px] items-center gap-6 rounded-[16px] border border-[#303030] px-6">

            {/* Cercul + planta */}
            <div className="relative h-30 w-30 shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#eeeeee]" />

              <Image
                src="/images/plant-2-removebg-preview.png"
                alt="Plant"
                width={80}
                height={80}
                className="relative left-5 top-0 z-10 h-30 w-20 object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-sm leading-6 text-[#404040]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus.
            </p>

          </div>

          {/* Card 3 */}
          <div className="flex min-h-[110px] items-center gap-6 rounded-[16px] border border-[#303030] px-6">

            {/* Cercul + planta */}
            <div className="relative h-30 w-30 shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#eeeeee]" />

              <Image
                src="/images/plant-3-removebg-preview.png"
                alt="Plant"
                width={50}
                height={50}
                className="relative left-5 bottom-3 z-10 h-30 w-20 object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-sm leading-6 text-[#404040]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus.
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}