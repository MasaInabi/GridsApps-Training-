export async function fetchCountries(fetcher = fetch) {
  const response = await fetcher('https://restcountries.com/v3.1/all?fields=name,region,capital,cca3')
  if (!response.ok) throw new Error(`Country service returned HTTP ${response.status}.`)
  const data = await response.json()
  if (!Array.isArray(data)) throw new TypeError('Country service returned invalid data.')
  return data.filter(entry => typeof entry.name?.common === 'string' && typeof entry.region === 'string')
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
}

export function filterCountries(countries, text, region) {
  const term = text.trim().toLowerCase()
  return countries.filter(country => country.name.common.toLowerCase().includes(term) &&
    (!region || country.region === region))
}
