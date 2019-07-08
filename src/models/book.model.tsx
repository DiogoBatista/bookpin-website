export interface Book {
  id?: string;
  name?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  thumbnail?: string;
  categories?: string[];
  publishedDate?: string;
  authors?: string[];
}

export interface BookDepository {
  id?: string;
  url?: string;
  availability?: string;
  price?: {
    currency?: string
    selling?: string
  };
}
