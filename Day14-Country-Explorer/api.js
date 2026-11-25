export async function fetchCountries(fetcher = fetch) {
  const response = await fetcher('https://restcountries.com/v3.1/all?fields=name,region,capital,cca3', {
    signal: AbortSignal.timeout(8000),
  })
  if (!response.ok) throw new Error(`Country service returned HTTP ${response.status}.`)
  const data = await response.json()
  if (!Array.isArray(data)) throw new TypeError('Country service returned invalid data.')
  const countries = data.filter(entry => typeof entry?.name?.common === 'string' && typeof entry.region === 'string')
    .map(entry => ({ ...entry, capital: Array.isArray(entry.capital) ? entry.capital : [] }))
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
  if (!countries.length) throw new Error('Country service returned no usable countries.')
  return countries
}

export function filterCountries(countries, text, region) {
  const term = text.trim().toLowerCase()
  return countries.filter(country => country.name.common.toLowerCase().includes(term) &&
    (!region || country.region === region))
}
