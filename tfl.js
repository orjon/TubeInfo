const { TFL_APP_KEY, TFL_BASE_URL } = require('./config')

// GET a TfL API path (e.g. '/line/mode/tube/status') and return the parsed JSON.
// The key goes in a header, never the URL, and error messages never contain it,
// so it cannot leak into logs.
async function tflGet(path) {
  let response
  try {
    response = await fetch(`${TFL_BASE_URL}${path}`, {
      headers: { Accept: 'application/json', app_key: TFL_APP_KEY || '' },
      signal: AbortSignal.timeout(10000)
    })
  } catch (error) {
    throw new Error(`TfL request failed (${error.name}): ${path}`)
  }
  if (!response.ok) {
    throw new Error(`TfL responded ${response.status}: ${path}`)
  }
  return response.json()
}

module.exports = { tflGet }
