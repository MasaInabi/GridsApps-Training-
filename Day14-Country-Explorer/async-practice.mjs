// Practice solution for stale responses in an asynchronous search.
export function createLatestSearch(request, { showResults, showError }) {
  let latestRequest = 0

  return async function search(query) {
    const requestId = ++latestRequest
    try {
      const results = await request(query)
      if (requestId === latestRequest) showResults(results)
    } catch (error) {
      if (requestId === latestRequest) showError(error)
    }
  }
}
