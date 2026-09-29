export type HeroData = {
    titleStart: string;
    titleAccentOne: string;
    titleMiddle: string;
    titleAccentTwo: string;
    description: string;
}

export type Stat = {
    value: string;
    label: string;
};

export type HeroProps = {
    basePath: string;
    hero: HeroData;
    stats: Stat[];
    buttonText: string;
    onOpenCv: () => void;
};
