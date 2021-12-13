/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'weight',
  title: 'Weight',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'number',
      title: 'Number',
      type: 'number',
    },
  ],
}
