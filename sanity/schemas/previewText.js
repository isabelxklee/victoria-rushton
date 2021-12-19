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
      name: 'svg',
      title: 'SVG File',
      type: 'image',
      fields: [
        {
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
        },
        {
          name: 'width',
          title: 'Width (px)',
          type: 'number',
        },
      ],
    },
    {
      name: 'useSVG',
      title: 'Display SVG file?',
      type: 'boolean',
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
      title: 'order',
      font: 'font.0.title',
      text: 'text',
    },
    prepare(selection) {
      const {title, text, font} = selection
      return {
        title: `${font}: ${title}`,
        subtitle: text,
      }
    },
  },
}
