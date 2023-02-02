const form = document.getElementById('shorten-form')
const result = document.getElementById('result')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const longUrl = form.elements.longUrl.value
  const response = await fetch('/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ longUrl }),
  })
  const { shortUrl } = await response.json()
  result.innerHTML = `<a href="${shortUrl}">${shortUrl}</a>`
})
