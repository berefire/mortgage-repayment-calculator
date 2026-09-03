// src/utils/getAssetUrl.js
export function getAssetUrl(relativePath) {
  return relativePath.replace('./', import.meta.env.BASE_URL)
}