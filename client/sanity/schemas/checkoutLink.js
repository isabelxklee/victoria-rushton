/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'checkoutLink',
  title: 'Checkout Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
