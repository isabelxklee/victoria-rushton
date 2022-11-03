export const getEverythingQuery = `


`

export const pressQuery = `*[_type == "press"] {
    _id,
    title,
    description,
    link
  }`

export const aboutQuery = `*[_type == "about"] {
    greeting,
    bio,
    buttonText,
    buttonLink
  }`

export const announcementQuery = `*[_type == "announcement"] {
    title,
    description
  }`

export const fontsQuery = `*[_type == "font"] | order(order){
  _id,
  title,
  order,
  homeText,
  homeTextSize,
  "homeTextSlant": homeTextSlant[0]->title,
  "homeTextWeight": homeTextWeight[0]->number,
  homeTextLineHeight,
  "slug": slug.current,
  "weights": weights[]->title,
  "slants": slants[]->title
}`

export const previewTextQuery = `*[_type == "previewText"] | order(order){
  _id,
  text,
  svg{
    altText,
    width,
    asset->{
      _id,
      url
    }
  },
  useSVG,
  size,
  lineHeight,
  "font": font[0]->title,
  "weightTitle": weight[0]->title,
  "weightNumber": weight[0]->number,
  "slant": slant[0]->title,
}`

export const licensesQuery = `*[_type == "license"] | order(order){
  _id,
  order,
  title,
  price,
  desktopWorkstations,
  webVisitors,
  ebooks
}`

export const checkoutLinksQuery = `*[_type == "checkoutLink"] {
  _id,
  title,
  linkText,
  url
}`

export const currentFontQuery = `*[slug.current == $slug]{
  _id,
  title,
  description,
  "slug": slug.current,
  "weights": weights[]->,
  "slants": slants[]->title,
  supportedLanguages
}`
