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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'desktopWorkstations',
      title: 'Desktop workstations',
      type: 'string',
    },
    {
      name: 'webVisitors',
      title: 'Web visitors',
      type: 'string',
    },
    {
      name: 'ebooks',
      title: 'E-books',
      type: 'string',
    },
  ],
}
