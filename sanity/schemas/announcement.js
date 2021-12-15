/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'announcement',
  title: 'Announcement',
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
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
