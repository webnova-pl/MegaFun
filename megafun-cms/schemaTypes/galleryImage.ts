// schemas/galleryImage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Zdjęcie/Film do Galerii',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      description: 'Nazwa atrakcji lub opis'
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      description: 'Krótki opis (opcjonalny)'
    }),
    defineField({
      name: 'mediaType',
      title: 'Typ mediów',
      type: 'string',
      options: {
        list: [
          { title: 'Zdjęcie', value: 'image' },
          { title: 'Film', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Zdjęcie',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ document }) => document?.mediaType === 'video',
      validation: Rule =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType !== 'video' && !value) {
            return 'Zdjęcie jest wymagane gdy typ mediów to "Zdjęcie"';
          }
          return true;
        }),
    }),
    defineField({
      name: 'video',
      title: 'Film',
      type: 'file',
      options: { accept: 'video/*' },
      hidden: ({ document }) => document?.mediaType !== 'video',
      validation: Rule =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType === 'video' && !value) {
            return 'Film jest wymagany gdy typ mediów to "Film"';
          }
          return true;
        }),
    }),
    defineField({
      name: 'videoPoster',
      title: 'Miniatura filmu (poster)',
      type: 'image',
      options: { hotspot: true },
      description: 'Opcjonalny obrazek wyświetlany przed odtworzeniem filmu',
      hidden: ({ document }) => document?.mediaType !== 'video',
    }),
    defineField({
      name: 'alt',
      title: 'Tekst alternatywny',
      type: 'string',
      description: 'Ważne dla SEO i dostępności'
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Zamki', value: 'zamki' },
          { title: 'Zjeżdżalnie', value: 'zjezdzalnie' },
          { title: 'Baseny', value: 'baseny' },
          { title: 'Tory przeszkód', value: 'tory' },
          { title: 'Z imprez', value: 'imprezy' },
          { title: 'Pozostałe', value: 'pozostałe' },
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      description: 'Mniejsza liczba = wyżej na liście'
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Pokaż na stronie głównej',
      type: 'boolean',
      description: 'Zaznacz, aby pojawił się w sliderze na stronie głównej',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      mediaType: 'mediaType',
      photo: 'photo',
      videoPoster: 'videoPoster',
    },
    prepare({ title, mediaType, photo, videoPoster }) {
      return {
        title: title || '(bez tytułu)',
        subtitle: mediaType === 'video' ? '🎬 Film' : '🖼️ Zdjęcie',
        media: photo || videoPoster,
      };
    },
  },
})