# Day 13 and Day 15 — Task Management

Serve the repository over localhost and open `Day13-Task-Management/index.html`.
Add a task, edit it, complete it, filter for completed tasks, refresh to verify persistence,
and delete it. Search by typing part of a title. Data is stored in the current browser.

Day 15 demo walkthrough: the form validates input and calls `update`. That function commits
the new records to browser storage before updating the UI. `render` derives the visible
list from the records, search term and selected filter.
