import { vi } from 'vitest'

// Replaces fetch so the server never calls the real TfL API.
// `routes` maps a TfL path (without the host) to a function or a value:
//   '/line/mode/tube/status': statusesFixture
//   '/stoppoint/940GZZLUWLO/arrivals': () => { throw new Error('boom') }
//   /^\/line\/.+\/stoppoints/: stoppointsFixture      (a RegExp key also works)
// Anything not listed answers 404, so a stray call shows up as a failure.
export function stubTfl(routes) {
  const calls = []
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url) => {
      const path = new URL(url).pathname + new URL(url).search
      calls.push(path)
      for (const [key, value] of Object.entries(routes)) {
        const match = key.startsWith('/^')
          ? new RegExp(key.slice(2, key.lastIndexOf('/'))).test(path)
          : path === key
        if (match) {
          const body = typeof value === 'function' ? value(path) : value
          return new Response(JSON.stringify(body), { status: 200 })
        }
      }
      return new Response('{}', { status: 404 })
    })
  )
  return { calls }
}
