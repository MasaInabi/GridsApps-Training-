import { fetchCountries, filterCountries } from './api.js'

const search = document.querySelector('#search')
const region = document.querySelector('#region')
const status = document.querySelector('#status')
const retry = document.querySelector('#retry')
const list = document.querySelector('#countries')
let countries = []

function render() {
  const visible = filterCountries(countries, search.value, region.value)
  list.replaceChildren(...visible.map(country => {
    const row = document.createElement('li')
    const title = document.createElement('strong')
    title.textContent = country.name.common
    const details = document.createElement('span')
    details.textContent = `${country.region} • ${country.capital?.join(', ') || 'Capital unavailable'}`
    row.append(title, details)
    return row
  }))
  status.textContent = visible.length ? `${visible.length} countries` : 'No countries match these filters.'
}

async function load() {
  status.textContent = 'Loading countries…'
  retry.hidden = true
  search.disabled = region.disabled = true
  try {
    countries = await fetchCountries()
    region.replaceChildren(new Option('All regions', ''), ...[...new Set(countries.map(country => country.region))]
      .sort().map(name => new Option(name, name)))
    search.disabled = region.disabled = false
    render()
  } catch {
    status.textContent = 'Could not load countries. Check your connection and try again.'
    retry.hidden = false
  }
}

search.addEventListener('input', render)
region.addEventListener('change', render)
retry.addEventListener('click', load)
load()
