/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'previewText',
  title: 'Preview Text',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'font',
      title: 'Font',
      type: 'array',
      of: [{type: 'reference', to: {type: 'font'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'weight',
      title: 'Weight',
      type: 'array',
      of: [{type: 'reference', to: {type: 'weight'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slant',
      title: 'Slant',
      type: 'array',
      of: [{type: 'reference', to: {type: 'slant'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
    },
    {
      name: 'lineHeight',
      title: 'Line Height',
      type: 'number',
    },
  ],

  preview: {
    select: {
      title: 'text',
      font: 'font.0.title',
    },
    prepare: ({title, font}) => {
      return {
        title: title,
        font: `Font: ${font}`,
      }
    },
  },
}
