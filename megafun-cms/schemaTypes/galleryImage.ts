// schemas/galleryImage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Zdjęcie do Galerii',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł zdjęcia',
      type: 'string',
      description: 'Nazwa atrakcji lub opis zdjęcia'
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      description: 'Krótki opis zdjęcia (opcjonalny)'
    }),
    defineField({
      name: 'photo',
      title: 'Zdjęcie',
      type: 'image',
      options: {hotspot: true},
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'alt',
      title: 'Tekst alternatywny',
      type: 'string',
      description: 'Ważne dla SEO i dostępności - opisz co znajduje się na zdjęciu'
    }),
    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          {title: 'Zamki', value: 'zamki'},
          {title: 'Zjeżdżalnie', value: 'zjezdzalnie'},
          {title: 'Baseny', value: 'baseny'},
          {title: 'Tory przeszkód', value: 'tory'},
          {title: 'Z imprez', value: 'imprezy'},
          {title: 'Pozostałe', value: 'atrakcje'}
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      description: 'Mniejsza liczba = wyżej na liście'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'asset'
    }
  }
})