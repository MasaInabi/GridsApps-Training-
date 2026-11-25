const screens = {
  Dashboard: ['Workspace overview', ['Active customers', 'Open orders', 'Monthly revenue'], ['128', '24', '$8,480']],
  Customers: ['Customer directory', ['Customer', 'Plan', 'Status'], ['Studio North', 'Team', 'Active']],
  Products: ['Product catalog', ['Product', 'Price', 'Status'], ['NOVA Analytics', '$29', 'Available']],
  Orders: ['Recent orders', ['Order', 'Customer', 'Status'], ['#1042', 'Studio North', 'Processing']],
  Analytics: ['Usage analytics', ['Sessions', 'Conversion', 'Retention'], ['3,420', '4.2%', '88%']],
  Reports: ['Monthly reports', ['Report', 'Period', 'Status'], ['Revenue summary', 'November', 'Ready']],
  Settings: ['Workspace settings', ['Workspace', 'Time zone', 'Language'], ['NOVA Demo', 'UTC', 'English']],
  Profile: ['Account profile', ['Name', 'Role', 'Workspace'], ['Demo User', 'Admin', 'NOVA Demo']],
  Notifications: ['Activity feed', ['Event', 'Source', 'Time'], ['New order received', 'Orders', 'Today']],
  Login: ['Sign in'],
  Register: ['Create an account']
}

const inputClass = 'w-full rounded-lg border border-white/20 bg-night px-3 py-2 focus-visible:outline-2 focus-visible:outline-aqua'

function authForm(isRegister) {
  return `<form id="auth-form" novalidate class="mt-5 max-w-md space-y-4">
    <p class="text-sm text-slate-300">Demo form. Use sample details.</p>
    ${isRegister ? `<label class="block">Name <input name="name" class="${inputClass}" required autocomplete="name"></label>` : ''}
    <label class="block">Email <input name="email" type="email" class="${inputClass}" required autocomplete="email"></label>
    <label class="block">Password <input name="password" type="password" minlength="8" class="${inputClass}" required autocomplete="${isRegister ? 'new-password' : 'current-password'}"></label>
    <p id="auth-status" role="status" class="text-sm text-aqua"></p>
    <button class="rounded-lg bg-violet-600 px-4 py-2 font-semibold hover:bg-violet-500 disabled:opacity-50">${isRegister ? 'Register' : 'Sign in'}</button>
  </form>`
}

function renderSection(screen, labels, values) {
  if (!labels) return authForm(screen === 'Register')
  if (screen === 'Dashboard' || screen === 'Analytics') {
    return `<dl class="mt-5 grid gap-4 sm:grid-cols-3">${labels.map((label, index) => `<div class="glass rounded-xl p-4"><dt class="text-sm text-slate-300">${label}</dt><dd class="mt-2 text-2xl font-bold">${values[index]}</dd></div>`).join('')}</dl>
      <section class="mt-6 rounded-xl border border-white/15 p-4"><h3 class="font-semibold">Recent activity</h3><ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300"><li>Studio North joined the workspace</li><li>Order #1042 was received</li></ul></section>
      ${screen === 'Dashboard' ? renderSection('Orders', screens.Orders[1], screens.Orders[2]) : ''}`
  }
  return `<div class="mt-5 overflow-x-auto"><table class="w-full text-left text-sm"><caption class="sr-only">${screen}</caption><thead><tr>${labels.map(label => `<th scope="col" class="border-b border-white/20 px-3 py-2">${label}</th>`).join('')}</tr></thead>
    <tbody><tr>${values.map(value => `<td class="px-3 py-3 text-slate-300">${value}</td>`).join('')}</tr></tbody></table></div>`
}

export function mountWorkspace(container) {
  container.innerHTML = `<section id="workspace" class="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
    <h2 class="font-display text-3xl font-bold">NOVA Workspace</h2>
    <div class="mt-6 grid gap-4 md:grid-cols-[12rem_minmax(0,1fr)]">
      <nav aria-label="Workspace" class="glass flex flex-wrap gap-2 rounded-xl p-3 md:flex-col md:self-start">
        ${Object.keys(screens).map(screen => `<button type="button" data-screen="${screen}" aria-pressed="false" class="rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10 aria-pressed:bg-violet-700">${screen}</button>`).join('')}
      </nav>
      <div class="glass min-w-0 rounded-xl p-5" id="workspace-screen"></div>
    </div>
  </section>`

  function show(screen) {
    const [title, labels, values] = screens[screen]
    container.querySelectorAll('[data-screen]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.screen === screen))
    })
    container.querySelector('#workspace-screen').innerHTML = `<h3 class="font-display text-2xl font-bold">${title}</h3>${renderSection(screen, labels, values)}`
  }

  container.addEventListener('click', event => {
    const button = event.target.closest('[data-screen]')
    if (button) show(button.dataset.screen)
  })
  container.addEventListener('input', event => {
    event.target.removeAttribute('aria-invalid')
    event.target.classList.remove('border-rose-400')
    const status = container.querySelector('#auth-status')
    if (status) status.textContent = ''
  })
  container.addEventListener('submit', event => {
    event.preventDefault()
    const form = event.target
    const invalid = [...form.querySelectorAll('input')].filter(field => !field.checkValidity() || !field.value.trim())
    invalid.forEach(field => {
      field.setAttribute('aria-invalid', 'true')
      field.classList.add('border-rose-400')
    })
    const status = form.querySelector('#auth-status')
    if (invalid.length) {
      status.textContent = `${invalid[0].name}: ${invalid[0].validationMessage || 'Enter a value.'}`
      invalid[0].focus()
      return
    }
    form.reset()
    status.textContent = 'Demo validation passed.'
  })
  show('Dashboard')
}
