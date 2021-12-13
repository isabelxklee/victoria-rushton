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
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'homeText',
      title: 'Home Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'homeTextSize',
      title: 'Home Text - Size',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'homeTextWeight',
      title: 'Home Text - Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'homeTextSlant',
      title: 'Home Text - Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'homeTextLineHeight',
      title: 'Home Text - Line Height',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
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
