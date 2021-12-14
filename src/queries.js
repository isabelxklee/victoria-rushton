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
