# Day 15 assessment practice

This practice uses the curriculum format. The trainer's assessment questions and reference design are pending.

## HTML and CSS · 60–90 minutes

Use the Task Manager page as a practice reference. Rebuild it with a heading, labelled task form, search field, filter, status message and task list. Stack the layout at 375 px, then arrange search and filter side by side at 768 px. Check keyboard focus, visible labels and long task titles.

## JavaScript logic

Complete these six prompts under a timer. The worked implementations are in [Day 12](../Day12-JavaScript/challenges.mjs).

1. Return a letter grade and pass/fail status. Test score boundaries and invalid inputs.
2. Compute the minimum, maximum, sum and mean. Include negative numbers and an empty array.
3. Sum cart quantities and prices in cents. Reject fractional quantities.
4. Search records by a trimmed, case-insensitive name.
5. Return distinct product categories.
6. Sort products by price or rating while preserving the input array.

## Debugging

An older search request returns after a newer one and replaces its results. Reproduce with two promises, then resolve the newer promise first. Repeat with an older rejected promise. Only the latest request should update the screen. See the [practice solution](../Day14-Country-Explorer/async-practice.mjs).

## Code walkthrough · 10–15 minutes

1. Add, edit, complete and reopen a task. Show search, the status filter and a no-results state.
2. Refresh to show persistence, then delete the task.
3. Explain why storage is written before the committed task list is rendered.
4. Explain why task titles are inserted using textContent.
5. Demonstrate input validation and describe what appears if storage fails.
