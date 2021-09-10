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
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'weights',
      title: 'Weights',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'slants',
      title: 'Slants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
