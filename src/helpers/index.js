export const slugCreator = (data) => {
  let slug = data.toLowerCase().split(' ').join('-')
  return slug
}
