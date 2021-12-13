/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
