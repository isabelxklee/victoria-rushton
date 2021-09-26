/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'font',
  title: 'Font',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'weights',
      title: 'Weights',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slants',
      title: 'Slants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
