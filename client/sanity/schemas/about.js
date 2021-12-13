/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'greeting',
      title: 'Greeting',
      type: 'text',
    },
    {
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'greeting',
    },
  },
}
