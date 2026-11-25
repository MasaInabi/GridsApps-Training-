# Day 13 and Day 15 — Task Management

Run `python -m http.server 8000` from this folder, then open http://localhost:8000.
Add a task, edit it, complete it, filter for completed tasks, refresh to verify persistence,
and delete it. Search by typing part of a title. Data is stored in the current browser.

Day 15 demo walkthrough: the form validates input and calls `update`. That function commits
the new records to browser storage before updating the UI. `render` derives the visible
list from the records, search term and selected filter.

See [assessment practice and demo walkthrough](assessment-practice.md). The official timed assessment materials are pending.
