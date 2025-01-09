export interface PicOfTheDay {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
  url: string;
}

export type Article = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  published_at: Date;
  news_site: string;
  summary: string;
};
export interface News {
  count: number;
  results: Article[];
}
