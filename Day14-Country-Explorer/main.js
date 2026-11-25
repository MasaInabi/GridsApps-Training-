import { fetchCountries, filterCountries } from './api.js'
import sampleCountries from './sample-countries.js'

const search = document.querySelector('#search')
const region = document.querySelector('#region')
const status = document.querySelector('#status')
const retry = document.querySelector('#retry')
const list = document.querySelector('#countries')
let countries = []
let sampleMode = false

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
  const message = visible.length ? `${visible.length} countries` : 'No countries match these filters.'
  status.textContent = sampleMode ? `Live data unavailable. Showing sample data. ${message}` : message
}

async function load() {
  status.textContent = 'Loading countries…'
  retry.hidden = true
  search.disabled = region.disabled = true
  try {
    countries = await fetchCountries()
    sampleMode = false
  } catch {
    countries = sampleCountries
    sampleMode = true
    retry.hidden = false
  }
  const selectedRegion = region.value
  const regions = [...new Set(countries.map(country => country.region))].sort()
  region.replaceChildren(new Option('All regions', ''), ...regions.map(name => new Option(name, name)))
  region.value = regions.includes(selectedRegion) ? selectedRegion : ''
  search.disabled = region.disabled = false
  render()
}

search.addEventListener('input', render)
region.addEventListener('change', render)
retry.addEventListener('click', load)
load()
