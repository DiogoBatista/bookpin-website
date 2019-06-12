export interface Book {
  book: {
    id: string;
    name: string;
    title: string;
    subTitle: string;
    description: string;
    thumbnail: string;
    categories: string[];
    publishedDate: string;
    authors: string[];
  }
}