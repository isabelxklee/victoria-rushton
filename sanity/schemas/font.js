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
    {
      name: 'preview1text',
      title: 'Preview 1 Text',
      type: 'blockContent',
    },
    {
      name: 'preview1size',
      title: 'Preview 1 Size',
      type: 'number',
    },
    {
      name: 'preview1weight',
      title: 'Preview 1 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview1slant',
      title: 'Preview 1 Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
    },
    {
      name: 'preview2text',
      title: 'Preview 2 Text',
      type: 'blockContent',
    },
    {
      name: 'preview2size',
      title: 'Preview 2 Size',
      type: 'number',
    },
    {
      name: 'preview2weight',
      title: 'Preview 2 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview2slant',
      title: 'Preview 2 Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
    },
    {
      name: 'preview3text',
      title: 'Preview 3 Text',
      type: 'blockContent',
    },
    {
      name: 'preview3size',
      title: 'Preview 3 Size',
      type: 'number',
    },
    {
      name: 'preview3weight',
      title: 'Preview 3 Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
    },
    {
      name: 'preview3slant',
      title: 'Preview 3 Slant',
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
