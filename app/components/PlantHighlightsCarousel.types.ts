export type Slide = {
  image: string;
  alt: string;
  text: string;
};

export type PlantHighlightsCarouselProps = {
  basePath: string;
  items: Slide[];
};
