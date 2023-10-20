export interface Article {
  id: string;
  title: string;
  introText: string;
  introImageUrl: string;
  fullText: string | null;
  fullImageUrl: string | null;
  date: string;
}
