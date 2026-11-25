import './style.css'

const products = [
  {tag:'POPULAR',tagClass:'text-aqua bg-aqua/10 border-aqua/20',icon:'✦',name:'NOVA Analytics',category:'Intelligence suite',description:'Turn your scattered data into clear decisions with beautiful, real-time insights.',price:'$29',accent:'from-violet-500/30 via-indigo-600/10 to-transparent',iconColor:'text-violet-200'},
  {tag:'NEW',tagClass:'text-violet-200 bg-violet-400/10 border-violet-400/20',icon:'⌘',name:'NOVA Workspace',category:'Team collaboration',description:'One focused space for projects, people, and the work that moves you forward.',price:'$19',accent:'from-cyan-500/20 via-sky-700/10 to-transparent',iconColor:'text-cyan-200'},
  {tag:'ESSENTIAL',tagClass:'text-amber-200 bg-amber-400/10 border-amber-400/20',icon:'◈',name:'NOVA Automate',category:'Workflow automation',description:'Replace repetitive busywork with smart flows that work around the clock.',price:'$39',accent:'from-fuchsia-500/20 via-purple-700/10 to-transparent',iconColor:'text-fuchsia-200'}
]

const card = (product) => `
  <article class="glass group relative overflow-hidden rounded-[28px] p-5 transition duration-300 hover:-translate-y-2 hover:border-violet-300/35 sm:p-6">
    <div class="absolute inset-0 bg-gradient-to-br ${product.accent} pointer-events-none"></div>
    <div class="relative">
      <div class="mb-6 flex items-center justify-between"><span class="rounded-full border px-3 py-1 text-[10px] font-bold tracking-[.18em] ${product.tagClass}">${product.tag}</span><span class="text-xs text-slate-400">01 / 03</span></div>
      <div class="mb-6 flex h-44 items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-[#10142c]/80 sm:h-48">
        <div class="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/15 bg-gradient-to-br from-white/20 to-white/5 shadow-[0_20px_65px_rgba(0,0,0,.5)] transition duration-500 group-hover:rotate-[-7deg] group-hover:scale-110"><span class="font-display text-7xl ${product.iconColor}">${product.icon}</span><div class="absolute -right-4 -top-4 h-9 w-9 rounded-full border border-white/20 bg-white/10 backdrop-blur"></div></div>
      </div>
      <p class="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-violet-300">${product.category}</p>
      <h3 class="font-display text-2xl font-bold">${product.name}</h3>
      <p class="mt-3 min-h-16 text-sm leading-7 text-slate-400">${product.description}</p>
      <div class="mt-6 flex items-center justify-between border-t border-white/10 pt-5"><div><span class="font-display text-2xl font-bold">${product.price}</span><span class="ml-1 text-xs text-slate-400">/ month</span></div><button type="button" data-product="${product.name}" class="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-violet-500">Explore <span aria-hidden="true">↗</span></button></div>
    </div>
  </article>`

document.querySelector('#app').innerHTML = `
<div class="bg-mesh relative min-h-screen overflow-hidden bg-night text-white">
  <div class="pointer-events-none absolute inset-0 grid-lines"></div>
  <header class="relative z-30 mx-auto max-w-7xl px-5 pt-5 sm:px-8 lg:px-10">
    <nav class="glass flex items-center justify-between rounded-2xl px-5 py-4 sm:px-7" aria-label="Main navigation">
      <a href="#home" class="font-display flex items-center gap-3 text-xl font-bold tracking-[-.06em]"><span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-700 text-lg shadow-lg shadow-violet-600/25">✦</span>NOVA<span class="text-aqua">.</span></a>
      <div class="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex"><a class="transition hover:text-white" href="#features">Features</a><a class="transition hover:text-white" href="#products">Products</a><a class="transition hover:text-white" href="#why-nova">Why NOVA</a></div>
      <div class="flex items-center gap-3"><a href="#products" class="hidden text-sm font-semibold text-slate-300 transition hover:text-white sm:block">Explore products</a><a href="#products" class="glow-btn rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-2.5 text-xs font-bold transition hover:brightness-125 sm:px-5 sm:text-sm">Get started ↗</a><button id="menuButton" type="button" class="rounded-lg border border-white/15 p-2 text-xl md:hidden" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobileMenu">☰</button></div>
    </nav>
    <div id="mobileMenu" class="glass mt-2 hidden rounded-2xl p-5 md:hidden"><div class="flex flex-col gap-4 text-sm"><a href="#features">Features</a><a href="#products">Products</a><a href="#why-nova">Why NOVA</a></div></div>
  </header>
  <main id="home" class="relative z-10">
    <section class="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pt-24 lg:min-h-[710px] lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:px-10 lg:pb-28 lg:pt-16">
      <div class="relative z-10">
        <div class="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-violet-200"><span class="h-2 w-2 animate-pulse rounded-full bg-aqua"></span> THE NEXT ERA OF WORK IS HERE <span class="ml-2 text-violet-300">↗</span></div>
        <h1 class="font-display max-w-3xl text-[clamp(3.6rem,7.1vw,6.8rem)] font-bold leading-[.99] tracking-[-.075em]">Build beyond <span class="gradient-word">limits.</span></h1>
        <p class="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">Meet the smarter workspace for bold ideas. Powerful tools, effortless collaboration, and everything your team needs to move faster.</p>
        <div class="mt-10 flex flex-wrap items-center gap-4"><a href="#products" class="glow-btn rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-7 py-4 text-sm font-bold transition hover:brightness-125">Explore the platform <span class="ml-3">↗</span></a><a href="#features" class="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:bg-white/10">See how it works <span class="ml-2">→</span></a></div>
        <div class="mt-14 flex flex-wrap items-center gap-8 border-t border-white/10 pt-7"><div><strong class="font-display text-2xl">12k<span class="text-aqua">+</span></strong><p class="mt-1 text-xs text-slate-500">Creative teams</p></div><div><strong class="font-display text-2xl">98<span class="text-aqua">%</span></strong><p class="mt-1 text-xs text-slate-500">Customer love</p></div><div><strong class="font-display text-2xl">24/7</strong><p class="mt-1 text-xs text-slate-500">Always connected</p></div></div>
      </div>
      <div class="relative mx-auto w-full max-w-[560px] lg:ml-auto" aria-label="Decorative product dashboard preview">
        <div class="absolute -left-8 -top-10 h-52 w-52 rounded-full bg-violet-600/25 blur-[90px]"></div><div class="absolute -bottom-8 -right-10 h-52 w-52 rounded-full bg-cyan-500/15 blur-[90px]"></div>
        <div class="glass relative rotate-[2deg] rounded-[30px] p-4 shadow-[0_45px_110px_rgba(0,0,0,.55)] sm:p-6">
          <div class="mb-5 flex items-center justify-between border-b border-white/10 pb-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-200">✦</div><div><p class="text-sm font-bold">NOVA Dashboard</p><p class="text-[11px] text-slate-500">Overview / Analytics</p></div></div><span class="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">● LIVE</span></div>
          <div class="grid grid-cols-2 gap-3"><div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-[11px] text-slate-400">Total revenue</p><p class="font-display mt-2 text-2xl font-bold sm:text-3xl">$48.2k</p><p class="mt-2 text-xs text-emerald-300">↗ +24.8%</p></div><div class="rounded-2xl border border-white/10 bg-white/5 p-4"><p class="text-[11px] text-slate-400">Active projects</p><p class="font-display mt-2 text-2xl font-bold sm:text-3xl">128</p><p class="mt-2 text-xs text-aqua">↗ +12.4%</p></div></div>
          <div class="mt-3 rounded-2xl border border-white/10 bg-[#0d1126]/90 p-4"><div class="mb-4 flex items-center justify-between"><span class="text-xs font-semibold">Performance overview</span><span class="text-[10px] text-slate-500">LAST 7 DAYS ⌄</span></div><div class="flex h-36 items-end justify-between gap-2 border-b border-white/10 pb-1 sm:h-44">${[30,50,39,67,53,77,61,90,73,97,80,100].map((v,i)=>`<div class="w-full rounded-t-md bg-gradient-to-t ${i===11?'from-cyan-600 to-aqua':'from-indigo-700/70 to-violet-400/80'}" style="height:${v}%"></div>`).join('')}</div><div class="mt-3 flex justify-between text-[10px] text-slate-500"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
          <div class="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><div class="flex items-center gap-3"><div class="flex -space-x-2"><span class="h-8 w-8 rounded-full border-2 border-[#171b31] bg-violet-400"></span><span class="h-8 w-8 rounded-full border-2 border-[#171b31] bg-cyan-400"></span><span class="h-8 w-8 rounded-full border-2 border-[#171b31] bg-rose-400"></span></div><span class="text-xs text-slate-300">Your team is on fire</span></div><span class="text-sm text-aqua">↗</span></div>
        </div>
        <div class="glass float-slow absolute -left-4 top-1/3 hidden -rotate-6 rounded-2xl px-4 py-3 shadow-xl sm:block lg:-left-12"><p class="text-[10px] text-slate-400">Weekly growth</p><p class="font-display mt-1 text-xl font-bold text-aqua">+32.6% ↗</p></div>
        <div class="glass float-late absolute -bottom-6 -right-2 hidden rotate-6 rounded-2xl px-4 py-3 shadow-xl sm:block lg:-right-9"><p class="text-xs font-semibold">✦ Task completed</p><p class="mt-1 text-[10px] text-slate-400">Everything is on track</p></div>
      </div>
    </section>
    <section id="features" class="relative border-y border-white/10 bg-white/[.025] py-7"><div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 text-center text-xs font-bold uppercase tracking-[.2em] text-slate-500 sm:justify-between sm:px-8"><span>DESIGNED FOR WHAT'S NEXT</span><span class="font-display text-lg tracking-tight text-slate-300">Layers</span><span class="font-display text-lg tracking-tight text-slate-300">Sisyphus</span><span class="font-display text-lg tracking-tight text-slate-300">Catalog</span><span class="font-display text-lg tracking-tight text-slate-300">Untitled UI</span></div></section>
    <section id="products" class="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div class="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p class="mb-4 text-xs font-bold uppercase tracking-[.24em] text-aqua">THE NOVA ECOSYSTEM</p><h2 class="font-display max-w-xl text-4xl font-bold tracking-[-.055em] sm:text-5xl">One platform.<br><span class="gradient-word">Infinite potential.</span></h2></div><p class="max-w-sm text-sm leading-7 text-slate-400">A connected suite of thoughtfully crafted tools to simplify your work and amplify your impact.</p></div><div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">${products.map(card).join('')}</div></section>
    <section id="why-nova" class="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10"><div class="glass flex flex-col items-start justify-between gap-7 rounded-[30px] p-8 sm:p-12 lg:flex-row lg:items-center"><div><p class="mb-3 text-xs font-bold uppercase tracking-[.2em] text-aqua">MADE TO MOVE YOU FORWARD</p><h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">Your best work starts here.</h2><p class="mt-3 max-w-lg text-sm leading-7 text-slate-400">Discover the tools built to help your ideas take flight.</p></div><a href="#home" class="glow-btn rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-600 px-7 py-4 text-sm font-bold">Back to top ↑</a></div></section>
  </main>
  <footer class="relative border-t border-white/10"><div class="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:px-8 lg:px-10"><span>© 2026 NOVA. Concept project for Grids Apps — Day 09.</span><span>Crafted with Vite + Tailwind CSS</span></div></footer>
  <div id="toast" role="status" aria-live="polite" class="fixed bottom-5 right-5 z-50 hidden max-w-[calc(100%-2.5rem)] rounded-2xl border border-violet-400/40 bg-[#171b32] px-5 py-4 text-sm text-white shadow-2xl"></div>
</div>`

const menuButton = document.querySelector('#menuButton')
const mobileMenu = document.querySelector('#mobileMenu')
menuButton.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden')
  mobileMenu.classList.toggle('hidden', isOpen)
  menuButton.setAttribute('aria-expanded', String(!isOpen))
})
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileMenu.classList.add('hidden')
  menuButton.setAttribute('aria-expanded', 'false')
}))
let toastTimeout
const toast = document.querySelector('#toast')
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  toast.textContent = `${button.dataset.product} — demo product selected!`
  toast.classList.remove('hidden')
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => toast.classList.add('hidden'), 3200)
}))
