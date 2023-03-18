export const cleanUrl = (url) => {
  let cleanUrl = url.replace('https://', '')

  if (cleanUrl.endsWith('/')) {
    cleanUrl = cleanUrl.slice(0, -1)
  }

  return cleanUrl
}
