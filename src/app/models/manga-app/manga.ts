export interface Manga {
  _id: string;
  title: string;
  description: string;
  rating: number;
}

export interface DTOManga {
  title: string;
  description: string;
  rating: number;
}

export const mapToUpdateObject = (manga: Manga): DTOManga => {
  return {
    title: manga.title,
    description: manga.description,
    rating: manga.rating,
  };
};
