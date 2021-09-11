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
      name: 'preview1',
      title: 'Preview 1',
      type: 'blockContent',
    },
    {
      name: 'preview1Size',
      title: 'Preview 1 Size',
      type: 'number',
    },
    {
      name: 'preview1Weight',
      title: 'Preview 1 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview1Slant',
      title: 'Preview 1 Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
    },
    {
      name: 'preview2',
      title: 'Preview 2',
      type: 'blockContent',
    },
    {
      name: 'preview2Size',
      title: 'Preview 2 Size',
      type: 'number',
    },
    {
      name: 'preview2Weight',
      title: 'Preview 2 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview2Slant',
      title: 'Preview 2 Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
    },
    {
      name: 'preview3',
      title: 'Preview 3',
      type: 'blockContent',
    },
    {
      name: 'preview3Size',
      title: 'Preview 3 Size',
      type: 'number',
    },
    {
      name: 'preview3Weight',
      title: 'Preview 3 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview3Slant',
      title: 'Preview 3 Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
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
