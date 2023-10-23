import { CatalogType } from '@src/modules/catalog/domain/types/CatalogType';

export interface CatalogItem {
  id: number;
  desc: string;
  imageUrl: string;
  name: string;
  price: number;
  type: CatalogType;
}
