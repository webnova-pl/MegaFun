import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

// Inicjalizacja buildera obrazów
const builder = imageUrlBuilder(client);

/**
 * Funkcja do generowania URL-i dla obrazów z Sanity
 * @param source Źródło obrazu z Sanity
 * @returns Builder URL dla obrazu
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  return builder.image(source);
}