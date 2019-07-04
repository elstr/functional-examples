const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val)

const map = cb => arr => arr.map(cb)

const lowerCase = str => str.toLowerCase()

const split = pattern => str => str.split(pattern)

const join = separator => vals => vals.join(separator)

const trace = msg => val => (console.log(msg, val), val)

const bookTitles = [
    'Harry Potter and the Chamber of Secrets',
    'Ready Player One',
    'Chronics of the king assasin: Vol 1',
    'Chrismas Carol'
]

const slugify = pipe(
   map(lowerCase),
   trace("after lowercase"),
   map(split(" ")),
   trace("after split"),
   map(join("-")),
   trace("after join"),
)

const slugs = slugify(bookTitles)

console.log(slugs)
