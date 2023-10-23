export interface Article {
  id: number;
  title: string;
  introText: string;
  introImageUrl: string;
  fullText: string | null;
  fullImageUrl: string | null;
  date: string;
}
