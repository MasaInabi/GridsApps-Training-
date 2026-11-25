const byId = id => document.getElementById(id)
const form = byId('task-form')
const title = byId('title')
const search = byId('search')
const filter = byId('filter')
const list = byId('tasks')
const status = byId('status')
const key = 'nova-final-project-tasks'
let tasks = []
let editing = null

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) ?? '[]')
    if (!Array.isArray(saved) || saved.some(task => typeof task?.id !== 'string' || typeof task.title !== 'string' || typeof task.done !== 'boolean')) {
      throw new Error('Invalid task data.')
    }
    tasks = saved
    status.textContent = 'Tasks loaded.'
  } catch {
    status.textContent = 'Saved tasks could not be loaded. They will be replaced if you save a task.'
  }
  render()
}

function update(next, message) {
  try {
    localStorage.setItem(key, JSON.stringify(next))
  } catch {
    status.textContent = 'Could not save changes. Check browser storage and try again.'
    return false
  }
  tasks = next
  status.textContent = message
  render()
  return true
}

function render() {
  const term = search.value.trim().toLowerCase()
  const state = filter.value
  const visible = tasks.filter(task => task.title.toLowerCase().includes(term) &&
    (state === 'all' || task.done === (state === 'done')))
  const empty = byId('empty')
  empty.hidden = visible.length > 0
  empty.textContent = tasks.length ? 'No tasks match these filters.' : 'No tasks yet. Add a task above.'
  list.replaceChildren(...visible.map(task => {
    const row = document.createElement('li')
    row.dataset.id = task.id
    row.dataset.done = task.done
    const label = document.createElement('span')
    label.textContent = task.title
    row.append(label)
    for (const [action, text] of [['toggle', task.done ? 'Reopen' : 'Complete'], ['edit', 'Edit'], ['delete', 'Delete']]) {
      const button = document.createElement('button')
      button.type = 'button'
      button.dataset.action = action
      button.textContent = text
      button.setAttribute('aria-label', `${text} ${task.title}`)
      row.append(button)
    }
    return row
  }))
}

function resetForm() {
  editing = null
  form.reset()
  byId('save').textContent = 'Add task'
  byId('cancel').hidden = true
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const text = title.value.trim()
  if (!text) {
    status.textContent = 'Enter a task title.'
    title.focus()
    return
  }
  const next = editing
    ? tasks.map(task => task.id === editing ? { ...task, title: text } : task)
    : [...tasks, { id: crypto.randomUUID(), title: text, done: false }]
  if (update(next, editing ? 'Task updated.' : 'Task added.')) resetForm()
})

list.addEventListener('click', event => {
  const button = event.target.closest('[data-action]')
  if (!button) return
  const { id } = button.closest('li').dataset
  const task = tasks.find(record => record.id === id)
  switch (button.dataset.action) {
    case 'edit':
      editing = id
      title.value = task.title
      byId('save').textContent = 'Save task'
      byId('cancel').hidden = false
      title.focus()
      break
    case 'toggle':
      if (update(tasks.map(record => record.id === id ? { ...record, done: !record.done } : record),
        task.done ? 'Task reopened.' : 'Task completed.')) search.focus()
      break
    case 'delete':
      if (update(tasks.filter(record => record.id !== id), 'Task deleted.')) {
        if (editing === id) resetForm()
        title.focus()
      }
      break
  }
})

byId('cancel').addEventListener('click', () => { resetForm(); title.focus() })
search.addEventListener('input', render)
filter.addEventListener('change', render)
requestAnimationFrame(load)
