// A small offline dataset for the demo and the search/filter exercise.
const samples = [
  ['Palestine', 'Asia', 'East Jerusalem'],
  ['Jordan', 'Asia', 'Amman'],
  ['Japan', 'Asia', 'Tokyo'],
  ['Egypt', 'Africa', 'Cairo'],
  ['Morocco', 'Africa', 'Rabat'],
  ['Kenya', 'Africa', 'Nairobi'],
  ['France', 'Europe', 'Paris'],
  ['Portugal', 'Europe', 'Lisbon'],
  ['Canada', 'Americas', 'Ottawa'],
  ['Brazil', 'Americas', 'Brasília'],
  ['Australia', 'Oceania', 'Canberra'],
  ['New Zealand', 'Oceania', 'Wellington'],
]

export default samples.map(([country, region, capital]) => ({
  name: { common: country }, region, capital: [capital],
})).sort((a, b) => a.name.common.localeCompare(b.name.common))
