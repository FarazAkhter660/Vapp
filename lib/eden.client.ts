import { treaty } from '@elysiajs/eden'

const API_ENDPOINT =
  import.meta.env?.VITE_API_ENDPOINT ??
  'https://workers.vera.sc'

const EdenClient = treaty(API_ENDPOINT, {
  fetch: {
    credentials: 'include',
  },
}) as any

export default EdenClient
