// app/api/counter.mjs
export async function get (req) {
  let { value = 0 } = req.session
  return {
    session: {},
    json: { value },
  }
}

export async function post (req) {
  let { value } = req.body
  const { action } = req.query
  value = parseInt(value)
  action === 'inc' ? value += 1 : value -= 1
  return {
    session: { value },
    location: '/counter'
  }
}

