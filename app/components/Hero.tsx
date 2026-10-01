import homeData from "../data/home.json"
import Image from "next/image";
import Link from "next/link";
import type { HeroProps } from "./Hero.types";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const item = {
    image: "/images/font-circle.png"
};

export default function Hero({ basePath, hero, stats, buttonText, onOpenCv }: HeroProps) {
    return (

        <section className="w-full">
            <div className="flex flex-col md:min-h-[650px] md:flex-row">
            {/* Left side */}
                <div className="flex w-full flex-col justify-center rounded-br-[120px] bg-surface px-6 py-10 sm:px-8 sm:py-12 md:w-1/2 md:rounded-br-[340px] md:px-13 md:py-15">
                    <div>
                        <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
                            Bring{" "} 
                                <span className="text-accent">{homeData.hero.titleAccentOne}</span> 
                                    {" "} {homeData.hero.titleMiddle} {" "}
                                 <span className="text-accent">{homeData.hero.titleAccentTwo}</span>
                        </h1>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-body font-poppins-custom sm:mt-8 sm:text-lg">
                            {homeData.hero.description}
                        </p>
                    </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 md:mt-12 md:gap-14 lg:gap-20">
                    <div className="flex flex-col">
                        <strong className="text-xl font-bold text-body sm:text-2xl">{homeData.stats[0].value}</strong>
                        <div className="stats-underline my-2 w-16 border-3 font-extrabold border-body sm:w-18"></div>
                        <span className="mt-1 max-w-[10rem] text-sm text-body">{homeData.stats[0].label}</span>
                    </div>

                    <div className="flex flex-col">
                        <strong className="text-xl font-bold text-body sm:text-2xl">{homeData.stats[1].value}</strong>
                        <div className="stats-underline--second my-2 w-16 border-3 font-extrabold border-body sm:w-18"></div>
                        <span className="mt-1 max-w-[10rem] text-sm text-body">{homeData.stats[1].label}</span>
                    </div>

                    <div className="flex flex-col">
                        <strong className="text-xl font-bold text-body sm:text-2xl">{homeData.stats[2].value}</strong>
                        <div className="stats-underline--third my-2 w-16 border-3 font-extrabold border-body sm:w-18"></div>
                        <span className="mt-1 max-w-[10rem] text-sm text-body">{homeData.stats[2].label}</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onOpenCv}
                    className="mt-8 hidden w-full cursor-pointer items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-bold text-white transition-colors duration-300 hover:bg-accent-hover sm:w-fit sm:text-lg md:inline-flex"
                >
                    {homeData.buttons.findPlant}
                </button>
            </div>

            {/* Right side */}
            <div className="relative flex min-h-[280px] w-full flex-col items-center justify-end bg-background md:min-h-[650px] md:w-1/2">
                <div className="flex w-full items-center gap-3 px-6 pt-4 md:fixed md:right-10 md:top-20 md:z-20 md:w-auto md:p-0">
                    <button
                        type="button"
                        onClick={onOpenCv}
                        className="inline-flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-full bg-accent px-4 py-4 text-base font-bold text-white transition-colors duration-300 hover:bg-accent-hover md:hidden"
                    >
                        {homeData.buttons.findPlant}
                    </button>
                    <Link
                        href="/form"
                        aria-label="Open the form page"
                        className="heart-logo flex size-16 shrink-0 cursor-pointer items-center justify-center rounded-full border border-primary sm:h-20 sm:w-20 md:h-26 md:w-26"
                    >
                        <Image
                            src={`${basePath}${item.image}`}
                            alt="Heart Icon"
                            width={40}
                            height={40}
                            className="heart-logo-image h-10 w-10 sm:h-14 sm:w-14 md:h-25 md:w-25"
                        />
                    </Link>
                </div>
                <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[680px] lg:max-w-[760px]">
                <Image
                    src={`${basePath}/images/plants-4-removebg-preview.png`}
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
        )
    }