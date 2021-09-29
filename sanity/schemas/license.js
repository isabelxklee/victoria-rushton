/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'license',
  title: 'License Type',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'desktopWorkstations',
      title: 'Desktop workstations',
      type: 'number',
    },
    {
      name: 'webVisitors',
      title: 'Web visitors',
      type: 'number',
    },
    {
      name: 'ebooks',
      title: 'E-books',
      type: 'number',
    },
  ],
}
