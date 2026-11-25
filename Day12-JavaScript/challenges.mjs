function finite(value) {
  if (!Number.isFinite(value)) throw new TypeError('Enter a finite number.')
  return value
}

export function grade(score) {
  finite(score)
  if (score < 0 || score > 100) throw new RangeError('Score must be between 0 and 100.')
  const scale = [[90, 'A'], [80, 'B'], [70, 'C'], [60, 'D'], [0, 'F']]
  return { grade: scale.find(([minimum]) => score >= minimum)[1], status: score >= 60 ? 'Pass' : 'Fail' }
}

export function statistics(numbers) {
  if (!numbers.length) throw new RangeError('Enter at least one number.')
  const values = numbers.map(finite)
  const sum = values.reduce((total, value) => total + value, 0)
  return { min: Math.min(...values), max: Math.max(...values), sum, average: sum / values.length }
}

export function cartTotal(products) {
  return products.reduce((cart, { price, quantity }) => {
    finite(price)
    if (price < 0 || !Number.isSafeInteger(quantity) || quantity < 0) throw new RangeError('Use a nonnegative price and whole quantity.')
    cart.cents += Math.round(price * 100) * quantity
    cart.quantity += quantity
    return cart
  }, { cents: 0, quantity: 0 })
}

export function searchByName(records, query) {
  const term = query.trim().toLowerCase()
  return records.filter(({ name }) => name.toLowerCase().includes(term))
}

export function uniqueCategories(records) {
  return [...new Set(records.map(({ category }) => category))]
}

export function topProducts(products, field = 'rating') {
  if (!['price', 'rating'].includes(field)) throw new RangeError('Choose price or rating.')
  return [...products].sort((a, b) => finite(b[field]) - finite(a[field]))
}
