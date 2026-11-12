import { apiBase } from './config'

export async function fetchJson(path) {
  const response = await fetch(`${apiBase}${path}`, {
    headers: { Accept: 'application/json' }
  })
  if (!response.ok) throw new Error(`${path} failed: ${response.status}`)
  return response.json()
}
