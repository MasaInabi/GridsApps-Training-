# Day 14 - Country Explorer

Run `python -m http.server 8000` from this folder, then open http://localhost:8000.

The app requests live country data. Search and region filters update the list without
reloading the page. If the request fails, the app clearly labels and shows a bundled
sample dataset. Retry switches back to live data when the request succeeds.

To demonstrate the error path, reload while the browser is offline. Search and filter
still work with the samples. Restore the connection and select Retry.

The trainer-provided broken async exercise is pending. The standalone
`async-practice.mjs` file shows a practice solution for stale async search responses.
